import React from 'react'
import { Dimensions, Image, TouchableOpacity } from 'react-native'

type AdvertCardProps = {
    title: string,
    thumbnail: any,
    resourceID: number
}

const AdvertCards = ({ title, thumbnail, resourceID} : AdvertCardProps) => {

    const { width } = Dimensions.get('screen');
  
    return (
    <TouchableOpacity
        onPress={() => console.log(`You pressed advert id: ${resourceID}`)}
        className={`w-full mr-10 relative flex-1`}
    >
        <Image
            source={ thumbnail}
            resizeMode='stretch'
            className='h-72 flex-1 relative rounded-xl'
        />
        {/* <Text className='text-2xl  z-10 font-semibold text-zinc-800'>{title}</Text> */}
    </TouchableOpacity>
  )
}

export default AdvertCards