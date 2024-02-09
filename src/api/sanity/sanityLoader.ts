import { SanityClient } from "sanity";
import { client } from "./config";

export class SanityLoader {
  constructor(public client: SanityClient) {}

  loadPage(slug: string) {
    return this.client.fetch(
      `*[_type=="page" && slug.current == '${slug}'][0]`
    );
  }

  loadHomePage() {
    return this.client.fetch(`*[_type=="homePage"][0]`);
  }

  loadMainSettings() {
    return this.client.fetch(`*[_id=="mainSettings"]`);
  }

  loadCustomQuery(query: string) {
    return this.client.fetch(query);
  }
}

export const sanityLoader = new SanityLoader(client);
