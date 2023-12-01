import rss from "@astrojs/rss";
import { getPosts } from "@utils/data";
import { SITE } from "@config";
import slugify from "@sindresorhus/slugify";

export async function GET() {
  const posts = await getPosts();

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: posts.map(({ slug, bodyHTML, title, publishOnDate, authors }) => ({
      link: `/${slug}`,
      title: `${SITE.title} - ${slugify(title)}`,
      content: bodyHTML,
      pubDate: publishOnDate ? new Date(publishOnDate) : new Date(),
      author: authors?.map(name => name).join(", "),
    })),
  });
}
