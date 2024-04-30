import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProjectsContentfulJohnSmilgaFields {
    title?: EntryFieldTypes.Symbol;
    url?: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
}

export type TypeProjectsContentfulJohnSmilgaSkeleton = EntrySkeletonType<TypeProjectsContentfulJohnSmilgaFields, "projectsContentfulJohnSmilga">;
export type TypeProjectsContentfulJohnSmilga<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeProjectsContentfulJohnSmilgaSkeleton, Modifiers, Locales>;
