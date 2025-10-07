import type { User } from '../../src/models/Types'
import { blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch, graySuitPants } from '../items/clothing_items';
import { casualOutfit } from '../items/outfits';

const dummyUser: User = {
    clothing: [blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch, graySuitPants],
    outfits: [casualOutfit]
}

export { dummyUser };