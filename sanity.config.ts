import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";

import {
  projectId,
  dataset,
  apiVersion,
  studioUrl,
  SANITY_STUDIO_PREVIEW_URL,
} from "@/sanity/env";
import { structureTool } from "sanity/structure";
import { theme } from "@/sanity/plugins/theme";
import { defaultDocumentNode, pageStructure } from "@/sanity/plugins/settings";

import { media } from "sanity-plugin-media";
import { schema, singletonTypes } from "@/sanity/schema";

const config = defineConfig({
  basePath: studioUrl,

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
    presentationTool({
      // Required: set the base URL to the preview location in the front end
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),
    media(),
  ],
});

export default config;
