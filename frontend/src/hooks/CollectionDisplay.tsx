import { useState } from "react";
import type ClothingPiece from "../models/ClothingPiece";
import type Outfit from "../models/Outfit";
import { blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch } from '../../dummy_data/items/clothing_items';
import { casualOutfit } from '../../dummy_data/items/outfits';
import type { Display } from "../models/Types";

const clothes = [blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch];
const outfits = [casualOutfit]

function useCollectionDisplayState() {
    const [displayItems, setDisplayItems] = useState<ClothingPiece[] | Outfit[] | undefined>(undefined)

    async function loadItems(whatToDisplay: Display) {
        setDisplayItems(undefined);
        console.log("Loading " + whatToDisplay);
        await new Promise(res => setTimeout(res, 3000));
        const items = whatToDisplay == "clothing" ? clothes : outfits;
        setDisplayItems(items);
        console.log("Loaded: " + items);
    }

    return {displayItems, loadItems};
}

export default useCollectionDisplayState;