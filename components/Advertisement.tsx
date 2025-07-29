import React from 'react'
import { FlatList, Text, View } from 'react-native'

const Advertisement = () => {

  return (
    <View className='w-screen h-72 relative flex mt-10 rounded-xl'>
      <Text className='text-4xl font-normal text-black'>Our Adverts</Text>
        <FlatList
            data={[]}
            renderItem={({item}) => <Text>Replace his with advertcard component</Text>}
            className='flex relative flex-1 min-w-full'
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            snapToAlignment='center'
        />
    </View>
  )
}

export default Advertisement