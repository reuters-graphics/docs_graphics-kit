import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import fs from 'fs-extra';
import md from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import sveltePreprocess from 'svelte-preprocess';
import url from 'url';

const getRootRelativePath = (homepageURL) => {
  if (!homepageURL) return '';
  const page = new url.URL(homepageURL);
  return homepageURL
    .replace(`${page.protocol}//${page.host}`, '')
    .replace(/\/$/, '');
};

const prod = process.env.NODE_ENV === 'production';
const pkg = fs.readJSONSync(new URL('./package.json', import.meta.url));

if (prod && !pkg.homepage)
  throw new Error(
    'Need to fill out the homepage in package.json before building!'
  );

const homepage = prod ? pkg.homepage.replace(/\/$/, '') : '';

process.env.VITE_DATELINE = new Date().toISOString();

export default {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  preprocess: [
    md.mdsvex(mdsvexConfig),
    sveltePreprocess({
      preserve: ['ld+json'],
      scss: {
        includePaths: ['src/', 'node_modules/bootstrap/scss/'],
        importer: [
          (url) => {
            // Redirect tilde-prefixed imports to node_modules
            if (/^~/.test(url))
              return { file: `node_modules/${url.replace('~', '')}` };
            return null;
          },
        ],
        quietDeps: true,
      },
      postcss: {
        plugins: [autoprefixer],
      },
    }),
  ],
  kit: {
    appDir: 'app',
    paths: {
      assets: prod ? homepage + '/cdn' : '',
      base: prod ? getRootRelativePath(homepage) : '',
    },
    adapter: adapter({
      pages: 'docs',
      assets: 'docs/cdn',
      fallback: null,
    }),
    files: {
      assets: 'src/statics',
      lib: 'src/lib',
      routes: 'src/routes',
      template: 'src/template.html',
    },
    vite: {
      build: { target: 'es2015' },
      server: {
        fs: {
          allow: ['.'],
        },
      },
      resolve: {
        alias: {
          $utils: '/src/utils',
          $pkg: '/package.json',
        },
      },
      optimizeDeps: {
        exclude: ['svelte-fa', '@reuters-graphics/style-theme-eisbaer'],
        include: [
          'marked',
          'lodash-es',
          'pym.js',
          'classnames',
          'ua-parser-js',
        ],
      },
    },
  },
};
