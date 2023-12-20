import { Card, CardBody, HStack, Image, List, ListItem, Skeleton, SkeletonText, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-utl";


const GenreList = () => {

    const { data, isLoading } = useGenres();
    let arr = [1, 2, 3, 4, 5, 6, 7]
    if (isLoading) {
        return (<List>
            {arr.map(a => <ListItem key={a} >
                <HStack>
                    <Card >
                        <Skeleton height={"60px"} />
                        <CardBody>
                            <SkeletonText />
                        </CardBody>
                    </Card>
                </HStack>
            </ListItem>)}
        </List>)
    }
    return (
        <List >
            {data.map(genre =>
                <ListItem key={genre.id} paddingY={'6px'}>
                    <HStack >
                        <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Text fontSize={'lg'}> {genre.name}</Text>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList