export type HomePageType = {
  _id: string;
  _type: string;
  sections: [
    {
      _key: string;
      _type: string;
      content: any;
    }
  ];
  seo: {
    seoDescription: string;
    seoTitle: string;
  };
  settings: {
    darkMode: boolean;
  };
};
