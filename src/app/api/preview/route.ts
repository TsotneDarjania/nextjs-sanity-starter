import { resolveHref } from "@/utils/resolver";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  draftMode().enable();
  const slug = req.nextUrl.searchParams.get("slug");
  const type = req.nextUrl.searchParams.get("type");
  const href = type && slug ? resolveHref(type!, slug!) : "/";
  redirect(href);
}
