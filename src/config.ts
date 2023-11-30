import type { Site, SocialObjects } from "./types";
export { default as HTML_TAGS } from "./html-tags";

export const SITE: Site = {
  website: "https://advent.raae.codes", // replace this with your deployed domain
  author: "Queen Raae",
  desc: "Byte-sized emails every day this advent covering a Semantic HTML Element, with a real-world use case!",
  title: "A Semantic Advent",
  ogImage: "semantic-og.png",
  emoji: "🎄",
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "YouTube",
    href: "https://youtube.com/queenraae",
    linkTitle: `${SITE.author} on YouTube`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/queen-raae/semantic-advent",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/queen.raae.codes/",
    linkTitle: `${SITE.author} on Instagram`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/raae",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/benedicteraae",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
];
