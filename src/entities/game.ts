import Platform from "./platform";
import Genre from "./genre";
import Publisher from "./publisher";

export default interface Game {
    id: number;
    name: string;
    background_image: string;
    genres: Genre[]
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    publishers: Publisher[]
    rating_top: number;
    slug: string
    description_raw: string
}