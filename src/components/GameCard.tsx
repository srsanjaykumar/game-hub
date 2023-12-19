import { Games } from '../hooks/useGames'
import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
interface Props {
    game: Games
}
const GameCard = ({ game }: Props) => {
    return (
        <Card borderRadius={10} overflow={'hidden'}>
            <Image src={game.background_image} />
            <CardBody>
                <Heading fontSize={{sm:19,md:18 ,lg:17 ,xl:15}}>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard