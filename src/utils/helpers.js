export function generateSlug(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateTagData(tags) {
  let TagData = [];
  tags.forEach((Tag) => {
    TagData.push({
      name: Tag,
      slug: `${generateSlug(Tag)}`,
    });
  });
  return TagData;
}
