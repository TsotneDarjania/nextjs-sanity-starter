export function resolveHref(documentType?: string, slug?: string): string {
  switch (documentType) {
    case "homePage":
      return "/";
    case "page":
      return `/${slug}`;
    default:
      return `/${slug}`;
  }
}
