import WardrobeItem from "./WardrobeItem";
import ClothingPiece  from "./ClothingPiece";
import type { Color, Season } from "./Types";


export default class Outfit extends WardrobeItem {

    clothes: ClothingPiece[];

    constructor(id: string, name: string, clothes: ClothingPiece[],
        seasons: Set<Season>, tags: Set<string>, imageUrl: string | undefined) {

            super(id, name, seasons, tags, imageUrl);
            this.clothes = clothes;

        }

    hasColor(color: Color): boolean {
        for (const piece of this.clothes) {
            if (piece.color.color === color.color)
                return true;
        }
        return false;
    }

    hasClothingPieceByID(id: string | undefined) {
        if (!id) return false;
        for (const piece of this.clothes) {
            if (piece.id === id) {
                return true;
            }
        }
        return false;
    }

}