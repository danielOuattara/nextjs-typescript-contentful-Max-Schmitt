import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSimpleRecipesGatsbyJohnSmilgaFields {
    title: EntryFieldTypes.Symbol;
    cookingTime: EntryFieldTypes.Integer;
    description: EntryFieldTypes.Text;
    servings: EntryFieldTypes.Integer;
    image: EntryFieldTypes.AssetLink;
    featured: EntryFieldTypes.Boolean;
    preparationTime: EntryFieldTypes.Integer;
    content: EntryFieldTypes.Object;
}

export type TypeSimpleRecipesGatsbyJohnSmilgaSkeleton = EntrySkeletonType<TypeSimpleRecipesGatsbyJohnSmilgaFields, "simpleRecipesGatsbyJohnSmilga">;
export type TypeSimpleRecipesGatsbyJohnSmilga<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSimpleRecipesGatsbyJohnSmilgaSkeleton, Modifiers, Locales>;
