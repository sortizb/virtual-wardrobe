import WardrobeItem from "./WardrobeItem";
import ClothingPiece  from "./ClothingPiece";
import type { Seasons } from "./Types";


export default class Outfit extends WardrobeItem {

    clothes: ClothingPiece[];

    constructor(id: string, name: string, clothes: ClothingPiece[],
        seasons: Set<Seasons>, tags: Set<string>, imageUrl: string) {

            super(id, name, seasons, tags, imageUrl);
            this.clothes = clothes;

        }

}