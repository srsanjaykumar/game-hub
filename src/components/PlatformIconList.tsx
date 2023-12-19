import { FaWindows, FaLinux, FaPlaystation, FaApple, FaAndroid, FaXbox } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import { IconType } from 'react-icons'


interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {

    // this is   index signature  it  means we can give index in [] brace 
    const mapIcon: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        linux: FaLinux,
        mac: FaApple,
        android: FaAndroid,
        xbox: FaXbox,
        web: BsGlobe,
        ios: MdPhoneIphone,
        nintendo: SiNintendo

    }

    return (
        
        <HStack marginY={'10px'}>
            
            {platforms.map((platform) => <Icon as={mapIcon[platform.slug]} color="gray.500" />)}
        </HStack>
    )
}

export default PlatformIconList