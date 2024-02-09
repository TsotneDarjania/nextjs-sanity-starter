import { defineArrayMember, defineField } from "sanity";

const sectionsForReference = [defineArrayMember({ type: "exampleSection" })];

export const pageFields = [
  defineField({
    title: "Sections",
    name: "sections",
    type: "array",
    of: sectionsForReference,
  }),
];
