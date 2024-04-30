import { Metadata, ResolvingMetadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { fetchSingleBlogPost, fetchBlogPosts } from "@/contentful/blogPosts";
import Link from "next/link";
import RichText from "../../contentful/RichText";

interface IBlogPostPageProps {
  params: {
    slug: string;
  };
}

//-----------------------------------------------------

/**
 * Tell Next.js about all our blog posts so
 * they can be statically generated at build time.
 */

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogPosts = await fetchBlogPosts({ preview: false });

  return blogPosts.map((post) => ({ slug: post.slug }));
}

/**
 * For each blog post, tell Next.js which metadata
 * (e.g. page title) to display.
 */

export async function generateMetadata(
  { params }: IBlogPostPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const singlePost = await fetchSingleBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!singlePost) {
    notFound();
  }
  return {
    title: singlePost.title,
  };
}

//-----------------------------------------------------
/**
 * The actual blog post page content
 */

export default async function SingleblogPostPage({
  params,
}: IBlogPostPageProps) {
  /**
   * Fetch a single blog post by slug using
   * the content preview if draft mode is enabled:
   */

  const singlePost = await fetchSingleBlogPost({
    slug: params.slug,
    preview: draftMode().isEnabled,
  });

  if (!singlePost) {
    // If a blog post can't be found,
    // tell Next.js to render a 404 page.
    notFound();
  }

  return (
    <main className="p-[6vW]">
      <Link href={"/"}>Back To Posts</Link>
      <div className="prose mt-8 border-t pt-mb-8">
        {/* Render the blog post image */}
        {/* Use the Contentful Images API to render responsive images. No next/image required: */}
        {singlePost.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={singlePost.image.src}
            srcSet={`${singlePost.image.src}?w=300 1x, ${singlePost.image.src} 2x`}
            width={300}
            height={300}
            alt={singlePost.image.alt}
          />
        )}

        {/* Render the blog post title */}
        <h1>{singlePost.title}</h1>

        {/* Render the blog post body */}
        <RichText document={singlePost.body} />
      </div>
    </main>
  );
}
