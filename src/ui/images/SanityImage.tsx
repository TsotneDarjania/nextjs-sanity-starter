import { CustomImage } from "@/types/sanityTypes";
import { urlForImage } from "@/utils/image";
import NextImage from "next/image";
import React from "react";

type Props = {
  image: CustomImage;
} & Omit<React.ComponentProps<typeof NextImage>, "src" | "alt">;

export default function SanityImage({ image, ...props }: Props) {
  return (
    <NextImage src={urlForImage(image)} alt={image?.alt || ""} {...props} />
  );
}
