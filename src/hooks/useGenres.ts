import genres from "../data/genres";


 export interface Genre {
    id: number;
    name: string;
    image_background:string;
}


const useGenres = () => { return {data:genres , isLoading :null , error:null} }
// useData<Genre>('/genres')   // call the server 


export default useGenres;
