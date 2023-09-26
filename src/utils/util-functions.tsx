export function getTitleFromHierarchy(fullTitle: string): string {
  const getTitleHierarchy = fullTitle.split("/");
  return getTitleHierarchy[getTitleHierarchy.length - 1];
}
