import { HomeIcon } from "lucide-react";
import { defineField, defineType } from "@sanity/types";
import { pageFields } from "./fields";
import { pageSettings } from "./settings";
import { seo } from "./seo";

export const initialValue = {
  title: "Home Page",
};

export const homePage = defineType({
  name: "homePage",
  title: "HomePage",
  type: "document",
  icon: HomeIcon,
  initialValue: initialValue,
  fields: [
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      initialValue: () => ({
        slug: { _type: "slug", current: "/" },
      }),
      readOnly: true,
    },
    seo,
    pageSettings,
    {
      name: "exampleCTAButton",
      title: "Example CTA Button",
      type: "cta",
    },
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
