import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import { CustomImage } from "@/types/sanityTypes";

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

// TODO: use this function for all images, it is null safe.
export const urlForImage = (source: CustomImage) => {
  if (!source) return "";
  return imageBuilder?.image(source).auto("format").fit("max")?.url() || "";
};
