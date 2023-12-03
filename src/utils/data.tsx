import slugify from "@sindresorhus/slugify";

export interface Post {
  slug: string;
  title: string;
  bodyHTML?: string;
  publishOnDate?: string;
  authors?: string[];
}

export const getPosts = async (): Promise<Post[]> => {
  const issues = await getGihubIssues();

  return issues
    .map(issue => {
      const title = issue.content?.title;
      const bodyHTML = issue.content?.bodyHTML;
      const publishOnDate = issue.publishOn?.date;
      const assignees = issue.content?.assignees?.nodes.map(node => node.login);
      return {
        title: title,
        bodyHTML: bodyHTML,
        publishOnDate: publishOnDate,
        authors: assignees,
        slug: `${publishOnDate || "tbd"}-${slugify(title)}`,
      };
    })
    .sort((a, b) => {
      if (a.slug < b.slug) {
        return -1;
      } else {
        return 1;
      }
    })
    .filter(post => {
      if (import.meta.env.NODE_ENV === "production") {
        return (
          // In production, only include posts that have a publish date in the past
          post.publishOnDate && new Date(post.publishOnDate) <= new Date()
        );
      } else {
        // In development etc., include all posts
        return true;
      }
    });
};

interface Issue {
  content: {
    title: string;
    bodyHTML?: string;
    assignees?: { nodes: { login: string }[] };
  };
  publishOn?: { date: string };
}

const getGihubIssues = async (): Promise<Issue[]> => {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
        {    
          node(id: "${import.meta.env.GITHUB_PROJECT_ID}") {
            ... on ProjectV2 {
              items(first: 30) {
                nodes {
                  publishOn: fieldValueByName(name: "Publish Date")  {
                    ... on ProjectV2ItemFieldDateValue {
                        date
                      }
                  }
                  content {
                    ... on Issue {
                      title
                      bodyHTML
                      assignees(first: 10) {
                        nodes {
                          login
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const { data } = await response.json();

  return data.node.items.nodes;
};
