import { Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"


 export interface GameQuery {
  genre: Genre | null
  platform: Platform | null
}


function App() {

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)


  return (

    <Grid templateAreas={{
      base: `'nav''main'`,
      lg: `"nav nav" "aside main"`
    }}
      templateColumns={{
        base: '1fr',
        lg: '250px',

      }}

    >
      <GridItem area={'nav'} >
        <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem area={'aside'} marginX={3}  >
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>

      <GridItem area={'main'} >
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
        <GameGrid gameQuery={gameQuery}  />
      </GridItem>
    </Grid>
  )
}

export default App
