import slugify from 'slugify';

export default (path) => {
  const normalizedPath = path
    .replace('./../../pages/', '')
    .replace(/\.md$/i, '')
    .replace(/^\//, '');
  const slug = slugify(normalizedPath, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  return slug;
};
