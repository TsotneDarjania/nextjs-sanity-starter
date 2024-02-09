import { Settings } from "lucide-react";
import { defineType } from "sanity";

export const mainSettings = defineType({
  type: "document",
  name: "mainSettings",
  title: "Settings",
  icon: Settings,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Site Title",
    },
    {
      name: "description",
      type: "text",
      title: "Site Description",
    },
    {
      name: "author",
      type: "string",
      title: "Author",
    },
    {
      name: "og_image",
      type: "image",
      title: "Open Graph Image",
      description:
        "Image for sharing previews on Facebook, Twitter etc. An ideal size is 1200x630 (2:1 ratio). Try to keep the file size under 8mb.",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Settings",
      };
    },
  },
});
