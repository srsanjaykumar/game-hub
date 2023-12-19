import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Games {
    id: number;
    name: string;
    background_image: string;
}

export interface FetchGamesResponse {

    count: number;
    results: Games[]
}
const useGames = () => {
    const [games, setGames] = useState<Games[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })
        return () => controller.abort()
    }, [])

    return { games, setError, setGames, error }
}


export default useGames;