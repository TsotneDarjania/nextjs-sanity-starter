import { sanityLoader } from "@/sanity/client/sanityLoader";

export async function Footer() {
  const data = await sanityLoader.loadFooter();
  return (
    <footer className="absolute left-0 w-full bottom-0 flex justify-center py-3 bg-neutral-700">
      <h1 className=" text-gray-500">
        © {new Date().getFullYear()} {data?.companyName}. All rights reserved.
      </h1>
    </footer>
  );
}
