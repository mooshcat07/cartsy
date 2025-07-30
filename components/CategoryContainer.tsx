import { SampleCategories } from '@/redux/resourcebundler'
import React from 'react'
import { FlatList, View } from 'react-native'
import CategoryCard from './CategoryCard'

const CategoryContainer = () => {

  return (
    <View className='w-full relative flex'>
      <FlatList
        data={SampleCategories}
        renderItem={({item}) => <CategoryCard title={item.title} thumbnail={item.thumbnail} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default CategoryContainer