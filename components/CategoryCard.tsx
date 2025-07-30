import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type CartegoryCardProps = {
    title: string,
    thumbnail: any
}

const CategoryCard = ({title, thumbnail} : CartegoryCardProps) => {

    const HandleTranscript = async() => {
        try {
            console.log('Trasncript handled!!!?')
        } catch (error : any) {
            throw new Error(error.message);
        }
    }

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            className='relative p-2 flex mr-8'
            onPress={HandleTranscript}
        >
            <View className='relative flex gap-4 items-center justify-center '>
                <Image
                    source={thumbnail}
                    resizeMode='cover'
                    className='w-24 h-24 relative rounded-full'
                />
                <Text className='text-lg font-semibold text-zinc-800 relative'>{title}</Text>
            </View>
        </TouchableOpacity>
  )
}

export default CategoryCard