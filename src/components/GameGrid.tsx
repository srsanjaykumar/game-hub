import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';


const GameGrid = () => {
    const { data, error, isLoading } = useGames();



    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{  sm: 2, md: 3, lg: 3, xl: 4 }} spacing={7} padding={8}>
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer>)}
                {data.map(game =>
                    <GameCardContainer>
                        <GameCard game={game} key={game.id} />
                    </GameCardContainer>)}

            </SimpleGrid>
        </>
    )
}

export default GameGrid