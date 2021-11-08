import slugifyPath from '$utils/slugify-path';

export async function get() {
  const modules = import.meta.glob('./../../pages/**/*.md');

  const promises = [];

  for (const [path, resolver] of Object.entries(modules)) {
    const slug = slugifyPath(path);
    if (slug === 'home') continue;
    const promise = resolver().then((doc) => ({
      slug,
      ...doc.metadata,
    }));
    promises.push(promise);
  }

  const docs = await Promise.all(promises);
  const publishedDocs = docs.filter((doc) => doc.published && doc.title);

  return {
    body: publishedDocs,
  };
}
