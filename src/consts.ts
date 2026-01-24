import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Noah Mould',
  description:
    "Fourth Year Integrated Engineering Student Studying Mechatronics at The University of British Columbia",
  href: 'https://noah-m.github.io/',
  author: 'Noah Mould',
  locale: 'en-US',
  featuredPostCount: 3,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/',
    label: 'home',
  },
  {
    href: '/blog',
    label: 'portfolio',
  },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/noah-m',
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/noah-mould-4828b22a4',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:nmould@student.ubc.ca',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
