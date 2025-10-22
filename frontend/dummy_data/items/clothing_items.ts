import ClothingPiece from '../../src/models/ClothingPiece';
import type { Season } from '../../src/models/Types';

export const blackJacket = new ClothingPiece(
    "black_jacket",
    "Black Casual Jacket",
    "Outer",
    {
        name: "black",
        color: "#000000"
    },
    new Set<Season>(["Fall", "Winter"]),
    new Set<string>(["casual", "party"]),
    "/dummy_data/images/black_jacket.png"
);

export const blackPants = new ClothingPiece(
    "black_pants",
    "Black Dress Pants",
    "Lower",
    {
        name: "black",
        color: "#000000"
    },
    new Set<Season>(["Spring", "Fall", "Winter"]),
    new Set<string>(["formal", "business"]),
    "/dummy_data/images/black_pants.png"
);

export const whiteShirt = new ClothingPiece(
    "white_shirt",
    "White Loose Shirt",
    "Upper",
    {
        name: "white",
        color: "#FFFFFF"
    },
    new Set<Season>(["Spring", "Summer", "Fall"]),
    new Set<string>(["formal", "business", "casual"]),
    "/dummy_data/images/white_shirt.png"
);

export const whiteSneakers = new ClothingPiece(
    "white_sneakers",
    "White Classic Sneakers",
    "Shoes",
    {
        name: "white",
        color: "#FFFFFF"
    },
    new Set<Season>(["Spring", "Summer"]),
    new Set<string>(["casual", "sports"]),
    "/dummy_data/images/white_sneakers.png"
);

export const blackWatch = new ClothingPiece(
    "black_watch",
    "Black Leather Watch",
    "Accessory",
    {
        name: "black",
        color: "#000000"
    },
    new Set<Season>(["Spring", "Summer", "Fall", "Winter"]),
    new Set<string>(["formal", "business", "casual"]),
    "/dummy_data/images/black_watch.png"
);

export const graySuitPants = new ClothingPiece(
    "gray_suit_pants",
    "Gray Suit Pants",
    "Lower",
    {
        name: "gray",
        color: "#808080"
    },
    new Set<Season>(["Spring", "Fall", "Winter"]),
    new Set<string>(["formal", "casual"]),
    undefined
)
