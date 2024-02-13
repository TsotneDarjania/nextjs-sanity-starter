import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/studio/",
    },
    //change example.com to your domain
    sitemap: "https://example.com/sitemap.xml",
  };
}
