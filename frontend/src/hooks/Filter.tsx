import { useState } from "react";
import { dummyUser } from "../../dummy_data/users/users";
import type ClothingPiece from "../models/ClothingPiece";
import type { Color, FilterOptions, ItemType, SelectorOption } from "../models/Types";
import { getAllUserTags, getAllUserColors, getAllUserClothes } from "../services/user";



// This is supposed to request user information from the API, for the moment it just loads dummy data
async function loadFilterOptions(kind: ItemType, setFilterOptions: Function) {
    const seasons: SelectorOption[] = ["Spring", "Summer", "Fall", "Winter"].map((season: string) => (
        {
            kind: "text",
            label: season,
            value: season
        }
    ));

    const tags: SelectorOption[] = getAllUserTags(dummyUser, kind).map((tag: string) => (
        {
            kind: "text",
            label: tag,
            value: tag
        }
    ));
    const colors: SelectorOption[] = getAllUserColors(dummyUser).map((color: Color) => (
        {
            kind: "color",
            label: color.name,
            value: color.color
        }
    ));
    
    let clothingTypes: SelectorOption[] = [];
    let clothingPieces: SelectorOption[] = [];

    if (kind == "clothing") {
        clothingTypes = ["Outter", "Upper", "Lower", "Shoes", "Jewelry"].map((clothingType: string) => (
            {
                kind: "text",
                label: clothingType,
                value: clothingType
            }
        ))
    }
    else {
        clothingPieces = getAllUserClothes(dummyUser).map((clothing: ClothingPiece) => (
            {
                kind: "icon",
                label: clothing.name,
                value: clothing.imageUrl
            }
        ));
    }

    const filterOptions: FilterOptions = {
        colors: colors,
        tags: tags,
        seasons: seasons,
        clothingTypes: clothingTypes,
        clothingPieces: clothingPieces
    }

    setFilterOptions(filterOptions);
}

export function useFilterState() {
    const [ filterOptions, setFilterOptions ] = useState<FilterOptions | undefined>({
            colors: [],
            tags: [],
            seasons: [],
            clothingTypes: [],
            clothingPieces: []
        });
    const loadOptions = (kind: ItemType) => loadFilterOptions(kind, setFilterOptions);
    return {filterOptions, loadOptions};
}