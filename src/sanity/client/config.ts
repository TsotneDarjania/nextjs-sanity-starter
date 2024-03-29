import SanityClient from "next-sanity-client";

export const client = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "YOUR_PROJECT_ID",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "YOUR_DATASET",
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false, // production should be true
});
