import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thank-you'],
    },
    sitemap: 'https://henmeya.com/sitemap.xml',
  }
}
