import platform from "../data/platform";
import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;

}

const usePlatforms = () => {
    return {data: platform , error:null }
    return useData<Platform>('/platforms/lists/parents')
}

export default usePlatforms;


