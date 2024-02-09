import { defineArrayMember, defineType } from "@sanity/types";
import { Code2 } from "lucide-react";

const item = defineType({
  title: "Navigation Item",
  name: "navItem",
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

export const header = defineType({
  title: "Header",
  name: "header",
  type: "document",
  icon: Code2,
  fields: [
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      name: "nav",
      type: "array",
      title: "Navigation",
      of: [defineArrayMember(item)],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
