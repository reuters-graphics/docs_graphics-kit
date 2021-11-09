import fs from 'fs-extra';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkAbbr from 'remark-abbr';
import remarkContainers from 'remark-containers';
import remarkGithub from 'remark-github';

const pkg = fs.readJSONSync(new URL('./package.json', import.meta.url));

export default {
  extensions: ['.svelte.md', '.md', '.svx'],
  smartypants: {
    dashes: 'oldschool',
  },
  remarkPlugins: [
    [remarkGithub, { repository: pkg.repository }],
    remarkAbbr,
    [remarkContainers],
  ],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      { behavior: 'wrap', properties: { class: 'heading-link' } },
    ],
  ],
};
