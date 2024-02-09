export const pageSettings = {
  title: "Settings",
  name: "settings",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Dark Mode",
      name: "darkMode",
      type: "boolean",
    },
    {
      title: "Hide from Sitemap",
      name: "hideFromSitemap",
      type: "boolean",
      description: "Check this if you want to hide this page from the sitemap",
    },
  ],
};
