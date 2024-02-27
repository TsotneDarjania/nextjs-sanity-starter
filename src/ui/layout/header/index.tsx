import { sanityLoader } from "@/sanity/client/sanityLoader";
import SanityImage from "@/ui/images/SanityImage";
import Link from "next/link";

export async function Header() {
  const data = await sanityLoader.loadHeader();

  return (
    <header className="flex fixed border-b-2 left-0 top-0 w-full justify-between pr-6 pl-2 py-3 items-center">
      {/* Company Logo */}
      <Link className="" href="/">
        <SanityImage
          className="w-[70px] custom-shadow -mt-1 opacity-50"
          height={70}
          width={70}
          image={data?.logo}
        />
      </Link>

      {/* Navigation */}
      <nav className=" hidden lg:flex gap-x-10 ">
        {data.nav.map((item, index) => (
          <Link
            target="_blank"
            className="relative text-neutral-700 underline-hover transition-all duration-300 hover:text-yellow-800 "
            href={item?.link}
            key={`nav_item_${index}`}
          >
            {item?.title.toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  );
}
