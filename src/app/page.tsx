import { homePageQueryOptions } from "@/api/sanity/queryOptions";
import { sanityLoader } from "@/api/sanity/sanityLoader";
import { Layout } from "@/ui";
import { CtaButton } from "@/ui/buttons";
import Sections from "@/utils/Sections";

export default async function Home() {
  // Example How to use query with options
  const homePage = await sanityLoader.loadHomePage(homePageQueryOptions);

  return (
    <Layout>
      {/* Example Cta Button */}
      <CtaButton cta={homePage.exampleCTAButton} />
      {/* Sections */}
      <Sections value={homePage.sections} />
    </Layout>
  );
}
