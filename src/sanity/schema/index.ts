import { page } from "@/sanity/schema/pages/page";
import { homePage } from "./pages/homePage";
import exampleSection from "./sections/example.section";
import { pageSettings } from "./pages/settings";
import { seo } from "./pages/seo";
import { header } from "./layout/header/header";
import { footer } from "./layout/footer/footer";
import { mainSettings } from "./setting/settings";

export const schema = {
  types: [
    // Pages
    page,
    homePage,
    // Settings
    mainSettings,
    pageSettings,
    seo,
    // Layout
    header,
    footer,
    // Sections
    exampleSection,
  ],
};

export const singletonDocId: Record<string, string> = {
  homePage: "homePage",
  header: "header",
  footer: "footer",
  mainSettings: "mainSettings",
};

export const singletonTypes = [homePage, header, footer, mainSettings];
