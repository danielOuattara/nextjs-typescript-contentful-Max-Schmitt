import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBlogPostMaxSchmittFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    body: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
}

export type TypeBlogPostMaxSchmittSkeleton = EntrySkeletonType<TypeBlogPostMaxSchmittFields, "blogPostMaxSchmitt">;
export type TypeBlogPostMaxSchmitt<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBlogPostMaxSchmittSkeleton, Modifiers, Locales>;
