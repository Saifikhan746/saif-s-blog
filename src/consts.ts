export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: '𐌔𐌀𐌉𐌅-dairies',
  DESCRIPTION:
    'Hey there I am Saif, the guy passionate about tec stuff. Its a website about blog posts this and that',
  EMAIL: 'isaifullahanwar@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: '/blog' },
  { href: '/authors', label: '/authors' },
  { href: '/about', label: '/about' },
  { href: '/tags', label: '/tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/Saifikhan746', label: '/GitHub' },
  { href: 'jason@enscribe.dev', label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
]
