import { homePageQueryOptions } from "@/sanity/client/queryOptions";
import { sanityLoader } from "@/sanity/client/sanityLoader";
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
      <Sections className="mt-20" value={homePage.sections} />
    </Layout>
  );
}
