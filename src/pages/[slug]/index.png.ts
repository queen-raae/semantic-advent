import type { APIRoute } from "astro";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { getPosts, type Post } from "@utils/data";

export async function getStaticPaths() {
  const posts = await getPosts();

  return posts.map(post => ({
    params: { slug: post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  return new Response(await generateOgImageForPost(props as Post), {
    headers: { "Content-Type": "image/png" },
  });
};
