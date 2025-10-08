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
        setActiveFilter(prev => ({...prev, ...filters}));

        if (!originalItems) return;

        let filtered = [...originalItems];

        if (activeFilter.search) {
            filtered = filtered.filter(item => 
                item.name.toLocaleLowerCase().includes(activeFilter.search.toLocaleLowerCase())
            );
        }

        if (activeFilter.colors) {
            filtered = filtered.filter(item =>
                (activeFilter.colors ?? []).some(color => 
                    item instanceof ClothingPiece ?
                    item.color.color === color.value :
                    item.hasColor({name: color.label, color: color.value})
                )
            );
        }

        if (activeFilter.seasons) {
            filtered = filtered.filter(item => 
                (activeFilter.seasons ?? []).some(season =>
                    item.seasons.has(season.value as Season)
                )
            );
        }

        if (activeFilter.tags) {
            filtered = filtered.filter(item => 
                (activeFilter.tags ?? []).some(tag =>
                    item.tags.has(tag.value.toLocaleLowerCase())
                )
            );
        }

        if (activeFilter.clothingType) {
            filtered = filtered.filter(item =>
                (activeFilter.clothingType ?? []).some(clothingType =>
                    item instanceof ClothingPiece ?
                    item.type == clothingType.value as ClothingType :
                    false
                )
            );
        }

        if (activeFilter.clothingPieces) {
            filtered = filtered.filter(item =>
                (activeFilter.clothingPieces ?? []).some(piece =>
                    item instanceof Outfit ? 
                    item.hasClothingPieceByID(piece.id) :
                    false
                )
            );
        }

        setDisplayItems(filtered);
    }

    return {displayItems, loadItems, activeFilter, applyFilters};
}

export default useCollectionDisplayState;