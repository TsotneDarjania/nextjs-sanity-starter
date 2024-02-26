import { homePageQueryOptions } from "@/sanity/client/queryOptions";
import { sanityLoader } from "@/sanity/client/sanityLoader";
import { PageLayout } from "@/ui";
import { CtaButton } from "@/ui/buttons";
import Sections from "@/utils/Sections";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function Home() {
  // Example How to use query with options
  const homePage = await sanityLoader.loadHomePage(homePageQueryOptions);

  return (
    <PageLayout>
      {/* Example Cta Button */}
      <CtaButton cta={homePage.exampleCTAButton} />
      {/* Sections */}
      <Sections className="mt-20" value={homePage.sections} />

      {draftMode().isEnabled && <VisualEditing zIndex={1000} />}
    </PageLayout>
  );
}
