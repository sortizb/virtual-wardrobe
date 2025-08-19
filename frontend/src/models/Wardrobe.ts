import ClothingPiece from "./ClothingPiece";
import Outfit from "./Outfit";

export type Wardrobe = {
    id: string;
    items: Record<string, ClothingPiece>;
    outfits: Record<string, Outfit>;
    allTags: Set<string>;
}