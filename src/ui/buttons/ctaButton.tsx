import Link from "next/link";

export function CtaButton({ cta }: { cta: any }) {
  const { label, page, link } = cta;
  //It needs to refactored to use the resolveHref function
  const href = (page && page.slug?.current) || link || "";

  return (
    <Link
      className="border bg-neutral-600 rounded-sm text-white px-2 py-4 text-sm absolute m-auto top-0 bottom-0 left-0 right-0 w-fit h-fit "
      href={href}
    >
      {label}
    </Link>
  );
}
