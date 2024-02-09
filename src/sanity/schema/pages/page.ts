import { defineType } from "@sanity/types";
import { StickyNote } from "lucide-react";
import { pageFields } from "./fields";
import { pageSettings } from "./settings";
import { seo } from "./seo";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: StickyNote,
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    seo,
    pageSettings,
    ...pageFields,
  ],
  preview: {
    select: {
      title: "slug.current",
    },
    prepare({ title }) {
      return {
        subtitle: "Page",
        title,
      };
    },
  },
});
