import { DocumentDefinition } from "sanity";
import {
  DefaultDocumentNodeResolver,
  StructureBuilder,
  StructureResolver,
  ViewBuilder,
} from "sanity/structure";

import { SanityDocument } from "next-sanity";
import { Iframe } from "sanity-plugin-iframe-pane";
import { singletonDocId } from "../schema";

export const pageStructure =
  (singletonTypeDefs: DocumentDefinition[]): StructureResolver =>
  (S) => {
    const singletonItems = singletonTypeDefs.map((typeDef) => {
      return S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(singletonDocId[typeDef.name])
            .views(ViewsWithPreview(S))
        );
    });

    const defaultListItems = S.documentTypeListItems().filter(
      (listItem: any) =>
        !singletonTypeDefs.find(
          (singleton) => singleton.name === listItem.getId()
        )
    );

    return S.list()
      .title("Content")
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };

const ViewsWithPreview = (S: StructureBuilder): ViewBuilder[] => {
  const url =
    typeof location == "undefined" ? "http://localhost:3000" : location.origin;
  return [
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc: SanityDocument) => {
          return doc?.slug?.current
            ? `${url}/api/preview?slug=${doc.slug.current}&type=${doc._type}`
            : `${url}/api/preview`;
        },
      })
      .title("Preview"),
  ];
};

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  return S.document().views(ViewsWithPreview(S));
};
