import { ExampleSectionType } from "@/types/sanityTypes";
import { SectionBoundary } from "@/ui";

export function ExampleSection(props: ExampleSectionType) {
  return (
    <SectionBoundary>
      <h1>{props.content}</h1>
    </SectionBoundary>
  );
}
