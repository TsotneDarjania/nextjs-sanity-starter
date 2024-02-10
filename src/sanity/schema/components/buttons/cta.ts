import { defineType } from "@sanity/types";

export const ctaButton = defineType({
  name: "cta",
  title: "Call to Action",
  type: "object",
  validation: (Rule) =>
    Rule.custom((fields: any) => {
      if (!fields.link && !fields.page) {
        return "Either link or slug must be set";
      }
      if (fields.link && fields.page) {
        return "Either link or slug must be set, not both";
      }
      return true;
    }),
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "page",
      title: "Internal Page",
      type: "reference",
      description: "Select a page from this website to link to",
      to: [{ type: "page" }],
    },
    {
      name: "link",
      title: "External Link",
      description: "Select an external full canonical URL to link to",
      type: "url",
    },
  ],
});
