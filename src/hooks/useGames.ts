import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;

}
export interface Games {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}


const useGames = (gameQuery: GameQuery) => {
    console.log(gameQuery);
    return useData<Games>('/games', {
        params: {
            genres: gameQuery.genre?.id, // selected Generes 
            platforms: gameQuery.platform?.id, // selected platform 
            ordering: gameQuery.sortOrder
        }
    },
        [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder])   // dependencies  are a make changes to fetch a data 
}


export default useGames;