import type { Color, ItemType, User } from "../models/Types";
import ClothingPiece from "../models/ClothingPiece";
import WardrobeItem from "../models/WardrobeItem";
import type Outfit from "../models/Outfit";

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

export { getAllUserClothes, getAllUserOutfits, getAllUserColors, getAllUserTags};