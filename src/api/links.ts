import type { SiteLink } from "../types";

const siteLinks: SiteLink[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Projects',
    url: '/projects',
  },
  {
    title: 'Publications',
    url: '/publications',
  },
  {
    title: 'Talks',
    url: '/talks',
  },
  // {
  //   title: 'About',
  //   url: '/about',
  // },
];

export function getSiteLinks() {
  return siteLinks;
}