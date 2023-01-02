// this is a sanity helper page

import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  // projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  projectId: "ipqrulj7",
  apiVersion: "1",
  useCdn: process.env.NODE_ENV === "production",
};
//this will setup client for fetching data in the getProps page functions.
export const sanityClient = createClient(config);

// this will help us fetch images from sanity
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
