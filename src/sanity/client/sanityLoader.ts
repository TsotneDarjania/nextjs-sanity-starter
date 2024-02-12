import SanityClient from "next-sanity-client";
import { client } from "./config";
import { FetchConfig } from "next-sanity-client/dist/types";
import {
  FooterType,
  HeaderType,
  HomePageType,
  PageType,
} from "@/types/sanityTypes";

export class SanityLoader {
  queryConfig: FetchConfig = {
    cache: "no-cache", // in production, this should be "stale-while-revalidate, but i am not sure about this one, need to check it out."
    next: { revalidate: 1 }, // in production, this should be 60 or more
  };

  constructor(public client: SanityClient<Record<string, string>>) {}

  loadHeader(queryOptions?: any): Promise<HeaderType> {
    return client.fetch({
      query: `*[_id=="header"][0] ${queryOptions ? ` ${queryOptions} ` : ""}`,
      config: this.queryConfig,
    });
  }

  loadFooter(queryOptions?: any): Promise<FooterType> {
    return client.fetch({
      query: `*[_id=="footer"][0] ${queryOptions ? ` ${queryOptions} ` : ""}`,
      config: this.queryConfig,
    });
  }

  loadPage(slug: string, queryOptions?: any): Promise<PageType> {
    return client.fetch({
      query: `*[_type=="page" && slug.current == '${slug}'][0] ${
        queryOptions ? ` ${queryOptions} ` : ""
      }`,
      config: this.queryConfig,
    });
  }

  loadHomePage(queryOptions?: any): Promise<HomePageType> {
    return client.fetch({
      query: `*[_type=="homePage"][0] ${
        queryOptions ? ` ${queryOptions} ` : ""
      }`,
      config: this.queryConfig,
    });
  }

  loadMainSettings() {
    return client.fetch({
      query: `*[_id=="mainSettings"]`,
      config: this.queryConfig,
    });
  }

  loadCustomQuery(query: string) {
    return client.fetch({
      query: query,
      config: this.queryConfig,
    });
  }
}

export const sanityLoader = new SanityLoader(client);
