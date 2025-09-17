export type ClothingType = "Outer" | "Upper" | "Lower" | "Shoes" | "Accessory";

export type Seasons = "Spring" | "Summer" | "Fall" | "Winter";

export type ItemType = "clothing" | "outfit";

export type FilterOption = {
  key: string;
  value: string;
}

// Type required to simplify the Selector component behavior

export type SelectorOption = {
  kind: "text" | "color";
  value: string;
  label: string;
}