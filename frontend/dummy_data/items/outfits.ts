import Outfit from '../../src/models/Outfit';
import { blackJacket, whiteShirt, blackPants, whiteSneakers } from './clothing_items';
import { Seasons } from '../../src/models/Types';

export const casualOutfit = new Outfit(
    "casual_outfit_1",
    "Casual Outfit",
    [blackJacket, whiteShirt, blackPants, whiteSneakers],
    new Set<Seasons>(["Spring", "Fall"]),
    new Set<string>(["casual", "outdoor"]),
    "/dummy_data/images/outfit_1.jpg"
);
