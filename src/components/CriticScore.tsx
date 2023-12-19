import { Badge } from "@chakra-ui/react"

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
    return (
        <Badge background={'white'} fontSize={{ sm: 16, md: 15, lg: 14, xl: 12 }} borderRadius={2} color={color} paddingX={2} > {score} </Badge>
    )
}

export default CriticScore