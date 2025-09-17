import type { Color, ItemType, User } from "../models/Types";
import ClothingPiece from "../models/ClothingPiece";
import WardrobeItem from "../models/WardrobeItem";
import type Outfit from "../models/Outfit";

function getAllUserClothes(user: User): ClothingPiece[] {
    return user.clothing;
}

function getAllUserOutfits(user: User): Outfit[] {
    return user.outfits;
}

function getAllUserTags(user: User, kind: ItemType): string[] {
    const items: WardrobeItem[] = kind === "clothing" ? user.clothing : kind === "outfit" ? user.outfits : [];
    let allTags: Set<string> = new Set();

    for (const item of items) {
        item.tags.forEach((tag: string) => {
            allTags.add(tag);
        })
    }
    return [...allTags];
}

function getAllUserColors(user: User): Color[] {
    const clothes: ClothingPiece[] = user.clothing;
    let colorMap: Map<string, Color> = new Map();

    for (const c of clothes) {
        // Color Hex, Color type
        colorMap.set(c.color.color, c.color);
    }

    return [...colorMap.values()];
}

export { getAllUserClothes, getAllUserOutfits, getAllUserColors, getAllUserTags};