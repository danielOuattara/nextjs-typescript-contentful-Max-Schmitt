import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePortfolioDanielFields {
    title?: EntryFieldTypes.Symbol;
    category: EntryFieldTypes.Symbol<"backend" | "frontend" | "fullstack" | "mobile">;
    level?: EntryFieldTypes.Symbol<"advanced" | "beginner" | "intermediate">;
    description?: EntryFieldTypes.Text;
    featured?: EntryFieldTypes.Boolean;
    url_website?: EntryFieldTypes.Symbol;
    url_github?: EntryFieldTypes.Symbol;
    technologies?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    featured_image: EntryFieldTypes.AssetLink;
    images_list: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypePortfolioDanielSkeleton = EntrySkeletonType<TypePortfolioDanielFields, "portfolioDaniel">;
export type TypePortfolioDaniel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePortfolioDanielSkeleton, Modifiers, Locales>;
