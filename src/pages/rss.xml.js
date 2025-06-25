import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Michael Quick | Blog',
    description: 'My personal blog for all things computer science, fitness, and other topics.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en</language>`,
  });
}