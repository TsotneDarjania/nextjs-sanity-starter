import { defineType } from "@sanity/types";

export default defineType({
  title: "Example Section",
  name: "exampleSection",
  type: "object",
  fields: [
    {
      title: "Content",
      name: "content",
      type: "text",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Example Section",
      };
    },
  },
});
