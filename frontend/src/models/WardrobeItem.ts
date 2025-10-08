import type { Season } from "./Types";

export default class WardrobeItem {

    id: string;
    name: string;
    seasons: Set<Season>;
    tags: Set<string>;
    imageUrl: string | undefined;

    constructor(id: string, name: string, seasons: Set<Season>, tags: Set<string>, imageUrl: string | undefined) {
       this.id = id;
       this.name = name;
       this.seasons = seasons;
       this.tags = tags;
       this.imageUrl = imageUrl; 
    }
}