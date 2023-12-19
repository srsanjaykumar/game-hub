import { Games } from '../hooks/useGames'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
interface Props {
    game: Games
}
const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={{ sm: 19, md: 18, lg: 17, xl: 15 }}>{game.name}</Heading>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
            </CardBody>
        </Card>
    )
}

export default GameCard