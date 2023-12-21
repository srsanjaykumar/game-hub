import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"
import SortSelector from "./components/SortSelector"


export interface GameQuery {
  // states
  genre: Genre | null
  platform: Platform | null

  //values
  sortOrder: string
  searchText: string
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
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>

      <Show above="lg">
        <GridItem area={'aside'} marginX={3}  >
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
        </GridItem>
      </Show>

      <GridItem area={'main'} >
        <Flex padding={2} marginBottom={5}>
          <Box marginRight={5} flex={'flex'}>
            <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
            <SortSelector
              sortOrder={gameQuery.sortOrder}  // Get Data in GameQuery 
              onSelectSortOrder={(sortOrder) => {
                setGameQuery({ ...gameQuery, sortOrder })  // Set Data into GameQuery 
              }} />
          </Box>
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
