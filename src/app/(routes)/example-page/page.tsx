import { sanityLoader } from "@/sanity/client/sanityLoader";
import { Layout } from "@/ui";
import Sections from "@/utils/Sections";

export default async function Page() {
  const data = await sanityLoader.loadPage("example-page");
  return (
    <Layout>
      {/* Sections */}
      <Sections className="mt-20" value={data.sections} />
    </Layout>
  );
}
