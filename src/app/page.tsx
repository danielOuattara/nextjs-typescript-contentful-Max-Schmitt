import Image from "next/image";
import { draftMode } from "next/headers";
import { fetchBlogPosts } from "@/contentful/blogPosts";
import Link from "next/link";

export default async function HomePage() {
  /* Fetch blog posts using the content preview if draft mode is enabled: */

  const blogPosts = await fetchBlogPosts({ preview: draftMode().isEnabled });
  return (
    <main className="p-[64vw]">
      <div className="prose">
        <h1>My Contentful Blog</h1>
        <ul>
          {blogPosts.map((singlePost) => (
            <li key={singlePost.slug}>
              <Link href={`/${singlePost.slug}`}>{singlePost.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
