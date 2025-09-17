import type { User } from '../../src/models/Types'
import { blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch } from '../items/clothing_items';
import { casualOutfit } from '../items/outfits';

const dummyUser: User = {
    clothing: [blackJacket, blackPants, whiteShirt, whiteSneakers, blackWatch],
    outfits: [casualOutfit]
}

export { dummyUser };