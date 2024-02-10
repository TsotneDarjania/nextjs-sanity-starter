import { ExampleSection } from "@/ui";
import { PortableText, PortableTextComponents } from "@portabletext/react";

type ComponentInput = any;

function getProps(input: ComponentInput) {
  return { value: input.value };
}

function renderComponent(
  input: ComponentInput,
  Component: React.ComponentType<any>
) {
  const { value } = getProps(input);
  return <Component {...value} />;
}

export default function Sections({ value }: { value: any }) {
  const components: PortableTextComponents = {
    types: {
      exampleSection: (input: ComponentInput) =>
        renderComponent(input, ExampleSection),
    },
  };

  return <PortableText components={components} value={value} />;
}
