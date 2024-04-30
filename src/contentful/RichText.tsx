import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type TRichTextProps = {
  document: RichTextDocument | null;
};

export default function RichText({ document }: TRichTextProps) {
  if (!document) {
    return null;
  }

  return <>{documentToReactComponents(document)} </>;
}
