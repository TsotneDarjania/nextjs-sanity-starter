import { defineArrayMember, defineType } from "@sanity/types";
import { Code2 } from "lucide-react";

const item = defineType({
  title: "Footer Item",
  name: "footerItem",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "link",
      type: "string",
      title: "Link",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});

export const footer = defineType({
  title: "Footer",
  name: "footer",
  type: "document",
  icon: Code2,
  fields: [
    {
      name: "nav",
      type: "array",
      title: "Footer Navigation",
      of: [defineArrayMember(item)],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
