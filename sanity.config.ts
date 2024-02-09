import { defineConfig } from "sanity";

import { projectId, dataset, apiVersion, studioUrl } from "@/sanity/env";
import { structureTool } from "sanity/structure";
import { theme } from "@/sanity/plugins/theme";
import { defaultDocumentNode, pageStructure } from "@/sanity/plugins/settings";

import { media } from "sanity-plugin-media";
import { schema, singletonTypes } from "@/sanity/schema";

const config = defineConfig({
  basePath: "/studio",

  projectId,

  dataset,

  schema: schema,

  theme,

  title: "Studio",

  apiVersion,

  plugins: [
    structureTool({
      structure: pageStructure(singletonTypes),
      defaultDocumentNode,
    }),
    media(),
  ],
});

export default config;
