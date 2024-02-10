import { sanityLoader } from "@/api/sanity/sanityLoader";
import { Layout } from "@/ui";
import Sections from "@/utils/Sections";

export default async function Page() {
  const data = await sanityLoader.loadPage("example-page");
  return (
    <Layout>
      {/* Sections */}
      <Sections value={data.sections} />
    </Layout>
  );
}
