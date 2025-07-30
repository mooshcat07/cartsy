import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type CategoryCards = {
  title: string,
  thumbnail: any,
  price: number,
  category: string
}

const CategoryCards = ({title, thumbnail, price, category} : CategoryCards) => {

  return (
    <TouchableOpacity
      activeOpacity={0.6} 
      className='w-52 relative rounded-xl mb-8 mx-6'
    >
      <View className='w-full relative h-72'>
        <Image
          source={ thumbnail }
          resizeMode='cover'
          className='w-full h-full flex-1 flex relative rounded-xl'
        />
      </View>
      <View className='flex relative gap-2 my-2'>
        <Text numberOfLines={2} className='text-xl font-semibold mb-3'>{title}</Text>
        <Text className='text-2xl font-semibold'>${price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCards