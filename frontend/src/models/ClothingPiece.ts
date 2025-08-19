import WardrobeItem from "./WardrobeItem";
import type { ClothingType } from "./Types";
import type { Seasons } from "./Types";

export default class ClothingPiece extends WardrobeItem{

    type: ClothingType;
    color: string;

    constructor(id: string, name: string, type: ClothingType, color: string, 
        seasons: Set<Seasons>, tags: Set<string>, imageUrl: string) {

            super(id, name, seasons, tags, imageUrl);
            this.type = type;
            this.color = color;

        }

}