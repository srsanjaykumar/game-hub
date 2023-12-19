import axios from "axios";

 export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '3ad80e3c750f474fb8f037893882122e'
    }
})


