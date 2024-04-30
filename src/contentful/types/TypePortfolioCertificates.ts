import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePortfolioCertificatesFields {
    title: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Symbol<"certificate" | "diploma">;
    verification_url: EntryFieldTypes.Symbol;
    origin: EntryFieldTypes.Symbol;
    date: EntryFieldTypes.Date;
    image: EntryFieldTypes.AssetLink;
}

export type TypePortfolioCertificatesSkeleton = EntrySkeletonType<TypePortfolioCertificatesFields, "portfolioCertificates">;
export type TypePortfolioCertificates<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePortfolioCertificatesSkeleton, Modifiers, Locales>;
