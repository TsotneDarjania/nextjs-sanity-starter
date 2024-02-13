import { sanityLoader } from "@/sanity/client/sanityLoader";
import { resolveHref } from "@/utils/resolver";

// change this to your domain
const url = "https://example.com";

export default async function sitemap() {
  const routes = await sanityLoader.loadSiteMap();
  const staticHrefs = [
    {
      url: `${url}/`,
      changefreq: "daily",
      priority: 1,
    },
    {
      url: `${url}/example-page`,
      priority: 0.9,
    },
  ];
  const dynamicHrefs = routes.map((route: any) => ({
    url: `${url}${resolveHref(route._type, route.slug.current)}`,
    changefreq: "weekly",
    priority: 0.5,
  }));
  return [...staticHrefs, ...dynamicHrefs];
}
