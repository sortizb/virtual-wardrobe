import type { Seasons } from "./Types";

export default class WardrobeItem {

    id: string;
    name: string;
    seasons: Set<Seasons>;
    tags: Set<string>;
    imageUrl: string;

    constructor(id: string, name: string, seasons: Set<Seasons>, tags: Set<string>, imageUrl: string) {
       this.id = id;
       this.name = name;
       this.seasons = seasons;
       this.tags = tags;
       this.imageUrl = imageUrl; 
    }
}