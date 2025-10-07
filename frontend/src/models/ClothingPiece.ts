import WardrobeItem from "./WardrobeItem";
import type { ClothingType } from "./Types";
import type { Color, Seasons } from "./Types";

export default class ClothingPiece extends WardrobeItem{

    type: ClothingType;
    color: Color;

    constructor(id: string, name: string, type: ClothingType, color: Color, 
        seasons: Set<Seasons>, tags: Set<string>, imageUrl: string | undefined) {

            super(id, name, seasons, tags, imageUrl);
            this.type = type;
            this.color = color;

        }

}