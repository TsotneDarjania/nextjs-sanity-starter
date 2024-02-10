import Link from "next/link";

export function CtaButton({ cta }: { cta: any }) {
  const { label, page, link } = cta;
  //It needs to refactored to use the resolveHref function
  const href = (page && page.slug?.current) || link || "";

  return (
    <Link
      className=" borrder bg-slate-600 text-white p-5 rounded-lg absolute m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit "
      href={href}
    >
      {label}
    </Link>
  );
}
