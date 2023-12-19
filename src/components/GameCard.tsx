import { Games } from '../hooks/useGames'
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CriticScore from './CriticScore'
import getCroppedImageUrl from '../services/image-utl'

interface Props {
    game: Games
}
const GameCard = ({ game }: Props) => {
    return (
        <Card width={'230px'} borderRadius={10} overflow={'hidden'}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <Heading fontSize={{ sm: 19, md: 18, lg: 17, xl: 15 }}>{game.name}</Heading>
                <HStack justifyContent={'space-between'} wrap={'wrap'} >
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore  score={game.metacritic} />

                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard