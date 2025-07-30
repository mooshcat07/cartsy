import React from 'react'
import { Text, View } from 'react-native'
import CategoryContainer from './CategoryContainer'

const Categories = () => {

  return (
    <View className='w-full relative flex my-8'>
      <Text className='text-3xl font-normal mb-8'>Our Categories</Text>
      <CategoryContainer />
    </View>
  )
}

export default Categories