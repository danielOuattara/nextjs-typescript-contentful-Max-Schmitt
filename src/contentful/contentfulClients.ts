/**
 * Using our freshly-generated types, let's fetch some content from Contentful.
 * First, let's create a little utility that lets us optionally fetch unpublished posts:
 */

import { createClient } from "contentful";

//-----------------------------------------------------
/**
 * This is the standard Contentful client: it fetches content that has been published.
 */
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

//-----------------------------------------------------
/**
 * This is a Contentful client that's been configured
 * to fetch drafts and unpublished content.
 */
const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN as string,
  host: "preview.contentful.com",
});

//-----------------------------------------------------
/**
 * This helper will let us switch between the two
 * clients easily:
 */

export default function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient;
  }
  return client;
}
