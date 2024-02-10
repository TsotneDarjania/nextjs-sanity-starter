import type { Image } from "@sanity/types";

// Page Types
export type HomePageType = {
  sections: [ExampleSectionType];
  exampleCTAButton: ctaButtonType;
} & PageBaseType;

export type PageType = {
  sections: [ExampleSectionType];
} & PageBaseType;

type PageBaseType = {
  _id: string;
  _type: string;
  seo: {
    seoDescription: string;
    seoTitle: string;
  };
  settings: {
    darkMode: boolean;
  };
};

// Layout Types
type headerItemType = {
  link: string;
  title: string;
};

export type HeaderType = {
  logo: CustomImage;
  nav: Array<headerItemType>;
};

export type FooterType = {
  companyName: string;
};

// Section Types
export type ExampleSectionType = {
  content: string;
};

//Button Types
export type ctaButtonType = {
  label: string;
  page: {
    _ref: string;
    _type: string;
  };
};

// Image Types
export type CustomImage = Image & {
  alt: string;
};
