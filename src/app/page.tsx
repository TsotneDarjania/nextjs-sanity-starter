import { sanityLoader } from "@/api/sanity/sanityLoader";
import { HomePageType } from "@/types/sanityTypes";

export default async function Home() {
  const homePage: HomePageType = await sanityLoader.loadHomePage();
  //It Works! Ha Ha
  console.log(homePage);
  return <main className="">Hello My Lord</main>;
}
