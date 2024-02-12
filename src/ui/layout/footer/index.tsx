import { sanityLoader } from "@/sanity/client/sanityLoader";

export async function Footer() {
  const data = await sanityLoader.loadFooter();
  return (
    <footer className="absolute w-full bottom-0 flex justify-center py-8">
      <h3 className="text-xl text-gray-400">{data?.companyName}</h3>
    </footer>
  );
}
