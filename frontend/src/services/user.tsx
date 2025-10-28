import type { ClothingType, Color, EditorOptions, FilterOptions, ItemType, Season, SelectorOption, User } from "../models/Types";
import ClothingPiece from "../models/ClothingPiece";
import WardrobeItem from "../models/WardrobeItem";
import Outfit from "../models/Outfit";

// Module to simulate API calls while developing frontend

function getAllUserClothes(user: User): ClothingPiece[] {
    return user.clothing;
}

function getAllUserOutfits(user: User): Outfit[] {
    return user.outfits;
}

function getAllUserTags(user: User, kind: ItemType): string[] {
    let items: WardrobeItem[] = [];
    if (kind == "clothing") {
        items = user.clothing;
    }

    else if (kind == "outfit") {
        items = user.outfits;
    }

    const allTags: Set<string> = new Set();

    for (const item of items) {
        for (const tag of item.tags) {
            allTags.add(tag);
        }
    }
    return [...allTags];
}

function getAllUserColors(user: User): Color[] {
    const clothes: ClothingPiece[] = user.clothing;
    const colorMap: Map<string, Color> = new Map();

    for (const piece of clothes) {
        // Color Hex, Color instance
        colorMap.set(piece.color.color, piece.color);
    }

    return [...colorMap.values()];
}

function addClothingPiece(user: User, name: string, clothingType: ClothingType, color: Color, seasons: Set<Season>, tags: Set<string>, imageUrl: string): number {
    try {
        const newPiece: ClothingPiece = new ClothingPiece(
            name.toLowerCase().replace(' ', '_'), //ID = name in lower case and without white spaces
            name,
            clothingType,
            color,
            seasons,
            tags,
            imageUrl
        );

        user.clothing.push(newPiece);
    }
    catch(e) {
        console.error(`Error while adding new piece to user: \n ${e}`);
        return -1;
    }
    return 0;
}

function addOutfit(user: User, name: string, clothes: ClothingPiece[], seasons: Set<Season>, tags: Set<string>, imageUrl: string): number {
    try {
        const newOutfit: Outfit = new Outfit(
            name.toLowerCase().replace(' ', '_'), //ID = name in lower case and without white spaces
            name,
            clothes,
            seasons,
            tags,
            imageUrl
        );
        user.outfits.push(newOutfit);
    }
    catch(e) {
        console.error(`Error while adding new outfit to user: \n${e}`);
        return -1;
    }
    return 0;
}

function getUserOptions(user: User, itemType: ItemType, optionsType: "filter" | "editor"): FilterOptions | EditorOptions {
    const seasons: SelectorOption[] = ["Spring", "Summer", "Fall", "Winter"].map((season: string) => (
        {
            kind: "text",
            label: season,
            value: season
        }
    ));

    const tags: SelectorOption[] = getAllUserTags(user, itemType).map((tag: string) => (
        {
            kind: "text",
            label: tag,
            value: tag
        }
    ));

    let colors: Color[] | SelectorOption[] = getAllUserColors(user);

    if (optionsType === "filter") {
        colors = colors.map((color: Color) => (
            {
                kind: "color",
                label: color.name,
                value: color.color
            }
        ));
    }
    
    let clothingTypes: SelectorOption[] = [];
    let clothingPieces: SelectorOption[] = [];

    if (itemType == "clothing") {
        clothingTypes = ["Outer", "Upper", "Lower", "Shoes", "Accessory"].map((clothingType: string) => (
            {
                kind: "text",
                label: clothingType,
                value: clothingType
            }
        ));
    }
    else {
        clothingPieces = getAllUserClothes(user).map((clothing: ClothingPiece) => (
            {
                kind: "icon",
                label: clothing.name,
                value: clothing.imageUrl ?? "",
                id: clothing.id
            }
        ));
    }

    if (optionsType === "filter") {
        const filterOptions: FilterOptions = {
            colors: colors as SelectorOption[],
            seasons: seasons,
            tags: tags,
            clothingPieces: clothingPieces,
            clothingTypes: clothingTypes
        };
        return filterOptions;
    } else {
        const editorOptions: EditorOptions = {
            colors: colors as Color[],
            seasons: seasons,
            tags: tags,
            clothingPieces: clothingPieces,
            clothingTypes: clothingTypes
        };
        return editorOptions;
    }
}
export { getAllUserClothes, getAllUserOutfits, getAllUserColors, getAllUserTags, addClothingPiece, addOutfit, getUserOptions};