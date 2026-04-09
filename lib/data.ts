import { assetUrl, slugify } from './utils'

export interface CraftItem {
  date: string
  title: string
  src: string
  component?: boolean
  href?: string
  wrap?: number | boolean
  requiresPointer?: boolean
  aspectRatio?: number
  dark?: boolean
  slowMotion?: boolean
}

export const craftItems: CraftItem[] = [
  {
    date: 'January 2023',
    title: 'Beaded Necklace',
    src: assetUrl('peach.mp4'),
    component: true,
    wrap: 420,
    requiresPointer: true,
  },
  {
    date: 'January 2023',
    title: 'Leather Jacket',
    src: assetUrl('peach.mp4'),
    component: true,
    wrap: 420,
    requiresPointer: true,
  },
  {
    date: 'January 2023',
    title: 'Studded Belt',
    src: assetUrl('peach.mp4'),
    component: true,
    wrap: 420,
    requiresPointer: true,
  },
  {
    date: 'January 2023',
    title: 'Vanish Input',
    src: assetUrl('peach.mp4'),
    component: true,
  },
  {
    date: 'January 2023',
    title: 'Radial Menu',
    src: assetUrl('peach.mp4'),
    component: true,
    wrap: 500,
    dark: true,
  },
  {
    date: 'January 2023',
    title: 'Precision Slider',
    src: assetUrl('peach.mp4'),
    wrap: true,
    dark: true,
  },
  {
    date: 'January 2023',
    title: 'Wheel Input',
    src: assetUrl('peach.mp4'),
    component: true,
  },
  {
    date: 'December 2022',
    title: '⌘K Breadcrumbs',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'December 2022',
    title: 'Preview Comments',
    src: assetUrl('peach.mp4'),
    href: '',
  },
  {
    date: 'November 2022',
    title: 'Cryptic List',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'November 2022',
    title: 'Vercel Footer',
    src: assetUrl('peach.mp4'),
    component: true,
    dark: true,
    requiresPointer: true,
  },
  {
    date: 'September 2022',
    title: 'Studded Belt',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'September 2022',
    title: 'Gooey Shader',
    src: assetUrl('gooey.mp4'),
  },
  {
    date: 'September 2022',
    title: 'Mirror Shader',
    src: assetUrl('stripes.mp4'),
  },
  {
    date: 'September 2022',
    title: 'Flume Shader',
    src: assetUrl('flume.mp4'),
  },
  {
    date: 'September 2022',
    title: 'Tangerine Shader',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'July 2022',
    title: 'Signatures',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'July 2022',
    title: 'Design Details',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'July 2022',
    title: 'Sticky Video',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'July 2022',
    title: 'Focus Reading',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'May 2022',
    title: 'Visual Writing',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'May 2022',
    title: 'Animated Typing',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'April 2022',
    title: 'Microinteractions I',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'April 2022',
    title: 'Microinteractions II',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'March 2022',
    title: 'Blurred Icons',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'April 2022',
    title: 'Arc Teaser',
    src: assetUrl('peach.mp4'),
  },
  {
    date: 'March 2022',
    title: 'Website Presentation',
    src: assetUrl('peach.mp4'),
  },
]

export const craftItemsWithIds = craftItems.map((item) => ({
  ...item,
  id: slugify(item.title),
}))

export interface Project {
  name: string
  description: string
  href: string
  year: number
}

export const projects: Project[] = [
  {
    name: 'Disney Streaming',
    description: 'Build, maintain, & optimize core subscriber pipeline',
    href: 'https://disneystreaming.com',
    year: 2022,
  },
  {
    name: 'Bristol - Studios',
    description: 'Storytelling at the intersection of fashion & basketball',
    href: 'https://bristol-studios.com',
    year: 2022,
  },
  {
    name: 'Progressive',
    description: 'Accelerate the pace of migration to the cloud',
    href: 'https://progressive.com',
    year: 2021,
  },
  {
    name: 'Streets Ahead',
    description: 'Scaled high-fashion eCommerce with a hint of operations',
    href: 'https://streetsaheadinc.com',
    year: 2021,
  },
  {
    name: 'Farmers',
    description: 'Automated the deployment of Rate Manuals',
    href: 'https://farmers.com',
    year: 2021,
  },
  {
    name: 'UI Playbook',
    description: 'An inspired collection of UI components',
    href: '/craft',
    year: 2021,
  },
  {
    name: 'Indiana University',
    description: 'Fundamentals of Python instructor',
    href: 'https://iu.edu',
    year: 2021,
  },
]
