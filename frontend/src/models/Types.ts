export type ClothingType = "Outer" | "Upper" | "Lower" | "Shoes" | "Accessory";

export type Seasons = "Spring" | "Summer" | "Fall" | "Winter";

export type Display = "clothing" | "outfit";

export type FilterOption = {
  key: string;
  value: string;
}

export interface FilterOptions {
  search?: string;
  colors?: FilterOption[];
  tags?: FilterOption[];
  category?: FilterOption[];
  season?: Seasons;
}