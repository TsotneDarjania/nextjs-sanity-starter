import { sanityLoader } from "@/sanity/client/sanityLoader";
import SanityImage from "@/ui/images/SanityImage";
import Link from "next/link";

export async function Header() {
  const data = await sanityLoader.loadHeader();

  return (
    <header className=" flex justify-between px-6 py-2 items-center">
      {/* Company Logo */}
      <Link href="/">
        <SanityImage
          className="opacity-30 rounded-[100%] "
          height={70}
          width={70}
          image={data?.logo}
        />
      </Link>

      {/* Navigation */}
      <nav className=" flex gap-x-10 ">
        {data.nav.map((item, index) => (
          <a
            className=" underline text-gray-700 px-10 py-2 transition-all rounded-md hover:text-white hover:bg-slate-950 "
            href={item?.link}
            key={`nav_item_${index}`}
          >
            {item?.title}
          </a>
        ))}
      </nav>
    </header>
  );
}
