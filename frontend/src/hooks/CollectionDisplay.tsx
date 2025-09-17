import { useState } from "react";
import type ClothingPiece from "../models/ClothingPiece";
import type Outfit from "../models/Outfit";
import { dummyUser } from '../../dummy_data/users/users';
import type { ItemType } from "../models/Types";
import { getAllUserClothes, getAllUserOutfits } from "../services/user";

function useCollectionDisplayState() {

    const [displayItems, setDisplayItems] = useState<ClothingPiece[] | Outfit[] | undefined>(undefined)

    async function loadItems(whatToDisplay: ItemType) {
        setDisplayItems(undefined);
        console.log("Loading " + whatToDisplay);
        await new Promise(res => setTimeout(res, 3000));
        const items = whatToDisplay == "clothing" ? getAllUserClothes(dummyUser) : whatToDisplay == "outfit" ? getAllUserOutfits(dummyUser) : undefined;
        setDisplayItems(items);
        //console.log("Loaded: " + items);
    }

    return {displayItems, loadItems};
}

export default useCollectionDisplayState;