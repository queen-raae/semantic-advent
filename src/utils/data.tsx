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
  const ignoreIssueFilter = import.meta.env.OVERRIDE_ISSUE_FILTER === "true";
  const posts = issues
    .filter(issue => {
      if (ignoreIssueFilter) {
        return true;
      } else {
        return (
          // Only include posts that have a publish date
          issue.publishOn?.date &&
          // and that date is in the past
          new Date(issue.publishOn?.date + " 18:30:00 GMT+01:00") <=
            new Date() &&
          // and is marked as done
          issue.status?.name === "Done"
        );
      }
    })
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
    });

  console.log(posts.length);

  return posts;
};

interface Issue {
  content: {
    title: string;
    bodyHTML?: string;
    assignees?: { nodes: { login: string }[] };
  };
  publishOn?: { date: string };
  status?: { name: "Assigned" | "In Progress" | "Done" };
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
                  status: fieldValueByName(name: "Status")  {
                    ... on ProjectV2ItemFieldSingleSelectValue {
                        name
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
