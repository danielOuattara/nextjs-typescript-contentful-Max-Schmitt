import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  if (
    searchParams.get("previewSecret") !== process.env.CONTENTFUL_PREVIEW_SECRET
  ) {
    return new Response("Invalid Token For Preview", { status: 401 });
  }

  draftMode().enable();
  redirect(searchParams.get("redirect") || "/");
}
