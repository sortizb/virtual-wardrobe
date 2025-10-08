import ClothingPiece from "./ClothingPiece";
import Outfit from "./Outfit";

export type ClothingType = "Outer" | "Upper" | "Lower" | "Shoes" | "Accessory";

export type Season = "Spring" | "Summer" | "Fall" | "Winter";

export type ItemType = "clothing" | "outfit";

export type Color = {
  name: string;
  color: string; // Hex
}

export type User = {
  // For the moment I only need it to store wardrobe data
  clothing: ClothingPiece[],
  outfits: Outfit[];
}

// Type required to simplify the Selector component behavior
export type SelectorOption = {
  kind: "text" | "color" | "icon";
  value: string;
  label: string;
  id?: string;
}

export type FilterOptions = {
  colors: SelectorOption[];
  tags: SelectorOption[];
  seasons: SelectorOption[];
  clothingTypes: SelectorOption[];
  clothingPieces: SelectorOption[];
}

export type ActiveFilter = {
  search: string;
  colors: SelectorOption[] | null;
  seasons: SelectorOption[] | null;
  clothingType: SelectorOption[] | null;
  clothingPieces: SelectorOption[] | null;
  tags: SelectorOption[] | null;
}