import { groupBy } from 'lodash-es';

const getGroup = (slug) => {
  // First folder is group
  if (slug.includes('/')) {
    return slug.split('/')[0];
  }
  return '';
};

const isActive = (slug, activePage) => {
  return `/${slug}` === activePage;
};

const getOrder = (d) => {
  return isNaN(d.order) ? Infinity : Number(d.order);
};

export default (docs, activePage) => {
  const groupedDocs = groupBy(
    docs.map((doc) => ({
      ...doc,
      navGroup: getGroup(doc.slug),
      isActive: isActive(doc.slug, activePage),
    })),
    (d) => d.navGroup
  );
  const groupOrder = Object.keys(groupedDocs);

  groupOrder.sort((a, b) => {
    const aMin = Math.min(...groupedDocs[a].map((d) => getOrder(d)));
    const bMin = Math.min(...groupedDocs[b].map((d) => getOrder(d)));
    return aMin - bMin;
  });

  return [groupedDocs, groupOrder];
};
