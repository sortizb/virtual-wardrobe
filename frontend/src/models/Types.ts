export type ClothingType = "Upper" | "Lower" | "Shoes" | "Accessory";

export type Seasons = "Spring" | "Summer" | "Fall" | "Winter";

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