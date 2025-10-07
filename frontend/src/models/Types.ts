import ClothingPiece from "./ClothingPiece";
import Outfit from "./Outfit";

export type ClothingType = "Outer" | "Upper" | "Lower" | "Shoes" | "Accessory";

export type Seasons = "Spring" | "Summer" | "Fall" | "Winter";

export type ItemType = "clothing" | "outfit";

export type Color = {
  name: string,
  color: string // Hex
}

export type User = {
  // For the moment I only need it to store wardrobe data
  clothing: ClothingPiece[],
  outfits: Outfit[];
}

// Type required to simplify the Selector component behavior
export type SelectorOption = {
  kind: "text" | "color" | "icon";
  value: string | undefined;
  label: string;
}

export type FilterOptions = {
  colors: SelectorOption[],
  tags: SelectorOption[],
  seasons: SelectorOption[],
  clothingTypes: SelectorOption[],
  clothingPieces: SelectorOption[]
}