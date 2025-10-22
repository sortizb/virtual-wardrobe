import { useState } from "react";
import ClothingPiece from "../models/ClothingPiece";
import Outfit from "../models/Outfit";
import { dummyUser } from '../../dummy_data/users/users';
import type { ActiveFilter, ClothingType, ItemType, Season } from "../models/Types";
import { getAllUserClothes, getAllUserOutfits } from "../services/user";

function useCollectionDisplayState() {

    const [displayItems, setDisplayItems] = useState<(ClothingPiece | Outfit)[] | undefined>(undefined);
    const [originalItems, setOriginalItems] = useState<(ClothingPiece | Outfit)[] | undefined>(undefined);
    const [activeFilter, setActiveFilter] = useState<ActiveFilter>({
        search: "",
        colors: [],
        seasons: [],
        clothingType: [],
        clothingPieces: [],
        tags: []
    });

    async function loadItems(whatToDisplay: ItemType) {
        setDisplayItems(undefined);
        setOriginalItems(undefined);
        await new Promise(res => setTimeout(res, 1000)); // Simulate latency
        const items = whatToDisplay == "clothing" ? 
        getAllUserClothes(dummyUser) : 
        whatToDisplay == "outfit" ? 
            getAllUserOutfits(dummyUser) : undefined;
        setDisplayItems(items);
        setOriginalItems(items);
    }

    function applyFilters(filters: Partial<ActiveFilter>) {
        const newFilters = { ...activeFilter, ...filters };
        setActiveFilter(newFilters);

        if (!originalItems) return;

        let filtered = [...originalItems];

        // Substring relation
        if (newFilters.search) {
            filtered = filtered.filter(item => 
                item.name.toLocaleLowerCase().includes(newFilters.search.toLocaleLowerCase())
            );
        }

        // For Clothing Pieces: OR relationship
        // For Outfits: AND relationship
        if (newFilters.colors && newFilters.colors.length > 0) {
            filtered = filtered.filter(item =>
                newFilters.colors!.some(color => 
                    item instanceof ClothingPiece ?
                    item.color.color === color.value :
                    item.hasColor({name: color.label, color: color.value})
                )
            );
        }

        // AND relationship
        if (newFilters.seasons && newFilters.seasons.length > 0) {
            filtered = filtered.filter(item => {
                for (let season of newFilters.seasons!) {
                    if (!item.seasons.has(season.value as Season))
                        return false;
                }
                return true;
            });
        }

        // AND relationship
        if (newFilters.tags && newFilters.tags.length > 0) {
            filtered = filtered.filter(item => {
                for (let tag of newFilters.tags!) {
                    if (!item.tags.has(tag.value.toLocaleLowerCase()))
                        return false;
                }
                return true;
            });
        }

        // OR relationship
        if (newFilters.clothingType && newFilters.clothingType.length > 0) {
            filtered = filtered.filter(item =>
                newFilters.clothingType!.some(clothingType =>
                    item instanceof ClothingPiece ?
                    item.type == clothingType.value as ClothingType :
                    false
                )
            );
        }

        // AND relationship
        if (newFilters.clothingPieces && newFilters.clothingPieces.length > 0) {
            filtered = filtered.filter(item => {
                if (!(item instanceof Outfit)) return false;

                for (let piece of newFilters.clothingPieces!) {
                    if (!item.hasClothingPieceByID(piece.id))
                        return false;
                }
                return true;
            });
        }

        setDisplayItems(filtered);
    }

    return {displayItems, loadItems, activeFilter, applyFilters};
}

export default useCollectionDisplayState;