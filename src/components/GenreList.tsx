import { Button, Card, CardBody, HStack, Image, List, ListItem, Skeleton, SkeletonText, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/image-utl";

interface Props {
    onSelectGenre: (genre: Genre) => void
    selectedGenre : Genre | null;
}

const GenreList = ({ onSelectGenre , selectedGenre}: Props) => {

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
                        <Button  fontWeight={genre.id === selectedGenre?.id ? 'bold' :'normal'  } onClick={() => onSelectGenre(genre)} fontSize={'lg'} variant={'link'} > {genre.name}</Button>
                    </HStack>
                </ListItem>)}
        </List>
    )
}

export default GenreList