export function titleToSlug(title: any) {
  // Normalize Unicode characters to standard form (NFKD to break down special characters)
  let normalizedTitle = title?.normalize("NFKD");

  // Remove special characters and non-alphanumeric characters except spaces
  let cleanedTitle = normalizedTitle?.replace(/[^\w\sÀ-ÿ]/g, " ");

  // Remove multiple consecutive spaces with a single space
  cleanedTitle = cleanedTitle?.replace(/\s+/g, " ").trim();

  // Replace spaces with hyphens and convert to lowercase
  const slug = cleanedTitle?.replace(/\s/g, "-").toLowerCase();

  return slug;
}

export function slugToTitle(slug: any) {
  // Replace hyphens with spaces
  let title = slug?.replace(/-/g, " ");

  // Capitalize the first letter of each word
  title = title?.replace(/\b\w/g, (char: string) => char.toUpperCase());

  return title;
}
