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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
    console.log(selectedGenre , selectedPlatform);
    return useData<Games>('/games', {
        params: {
            genres: selectedGenre?.id, // selected Generes 
            platforms: selectedPlatform?.id  // selected platform 
        }
    },
        [selectedGenre?.id, selectedPlatform?.id])   // dependencies  are a make changes to fetch a data 
}


export default useGames;