import ClothingPiece from '../../src/models/ClothingPiece';
import { Seasons } from '../../src/models/Types';

export const blackJacket = new ClothingPiece(
    "black_jacket",
    "Black Casual Jacket",
    "Outer",
    "black",
    new Set<Seasons>(["Fall", "Winter"]),
    new Set<string>(["casual", "party"]),
    "/dummy_data/images/black_jacket.png"
);

export const blackPants = new ClothingPiece(
    "black_pants",
    "Black Dress Pants",
    "Lower",
    "black",
    new Set<Seasons>(["Spring", "Fall", "Winter"]),
    new Set<string>(["formal", "business"]),
    "/dummy_data/images/black_pants.png"
);

export const whiteShirt = new ClothingPiece(
    "white_shirt",
    "White Loose Shirt",
    "Upper",
    "white",
    new Set<Seasons>(["Spring", "Summer", "Fall"]),
    new Set<string>(["formal", "business", "casual"]),
    "/dummy_data/images/white_shirt.png"
);

export const whiteSneakers = new ClothingPiece(
    "white_sneakers",
    "White Classic Sneakers",
    "Shoes",
    "white",
    new Set<Seasons>(["Spring", "Summer"]),
    new Set<string>(["casual", "sports"]),
    "/dummy_data/images/white_sneakers.png"
);

export const blackWatch = new ClothingPiece(
    "black_watch",
    "Black Leather Watch",
    "Accessory",
    "black",
    new Set<Seasons>(["Spring", "Summer", "Fall", "Winter"]),
    new Set<string>(["formal", "business", "casual"]),
    "/dummy_data/images/black_watch.png"
);
