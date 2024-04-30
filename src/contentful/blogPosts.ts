/**
 * Next, let's create a little helper for fetching one or multiple blog posts:
 */

import { TypeBlogPostMaxSchmittSkeleton } from "./types";
import { Entry } from "contentful";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import contentfulClient from "./contentfulClients";
import { IContentImage, parseContentfulContentImage } from "./contentImage";

type TBlogPostEntry = Entry<TypeBlogPostMaxSchmittSkeleton, undefined, string>;

//-----
/**
 * A simplified version of blog post:
 * We don't need all the data that Contentful gives us.
 */

export interface IBlogPost {
  title: string;
  slug: string;
  body: RichTextDocument | null;
  image: IContentImage | null;
}

//-----------------------------------------------------
/**
 * A function to transform a Contentful blog post
 * into a blog post that matches our BlogPost interface.
 */

export function parseContentfulBlogPost(
  blogPostEntry?: TBlogPostEntry,
): IBlogPost | null {
  if (!blogPostEntry) {
    return null;
  }
  return {
    title: blogPostEntry.fields.title || "",
    slug: blogPostEntry.fields.slug,
    body: blogPostEntry.fields.body || null,
    image: parseContentfulContentImage(blogPostEntry.fields.image),
  };
}

//-----------------------------------------------------

/**
 * A function to fetch all blog posts.
 * Optionally it uses the Contentful content preview.
 */

interface IFetchBlogPosts {
  preview: boolean;
}

export async function fetchBlogPosts({
  preview,
}: IFetchBlogPosts): Promise<IBlogPost[]> {
  const contentful = contentfulClient({ preview });

  const rawBlogPostsResult =
    await contentful.getEntries<TypeBlogPostMaxSchmittSkeleton>({
      content_type: "blogPostMaxSchmitt",
      include: 2,
      order: ["fields.title"],
    });

  return rawBlogPostsResult.items.map(
    (blogPost) => parseContentfulBlogPost(blogPost) as IBlogPost,
  );
}

//-----------------------------------------------------

/**
 * A function to fetch a single blog post by its slug.
 * Optionally uses the Contentful content preview.
 */
interface IFetchSingleBlogPost {
  preview: boolean;
  slug: string;
}

export async function fetchSingleBlogPost({
  preview,
  slug,
}: IFetchSingleBlogPost): Promise<IBlogPost | null> {
  const contentful = contentfulClient({ preview });

  const rawBlogPostResult =
    await contentful.getEntries<TypeBlogPostMaxSchmittSkeleton>({
      content_type: "blogPostMaxSchmitt",
      "fields.slug": slug,
      include: 2,
    });

  return parseContentfulBlogPost(rawBlogPostResult.items[0]) as IBlogPost;
}
