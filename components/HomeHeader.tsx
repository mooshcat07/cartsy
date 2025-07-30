import { redux } from '@/redux/Store';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Categories from './Categories';

const HomeHeader = () => {
  const { user } = useContext<any>(redux);

  return (
    <View className='w-full relative flex gap-2'>
      <View className='w-full relative flex flex-row items-center justify-between'>
        <View className='flex-1 flex flex-row items-center relative gap-4'>
          <Image
            source={{
                uri: user.Avatar
            }}
            resizeMode='contain'
            className='w-10 h-10 rounded-full relative'
          />
          <Text className='text-2xl '>Hey <Text className='font-semibold'>{user?.Fullname} 👋</Text></Text>
        </View>
        <TouchableOpacity 
          activeOpacity={0.5}
          className='relative p-3 bg-black rounded-xl'
        >
          <Ionicons name="notifications-outline" size={28} color="red" className='relative' />
        </TouchableOpacity>
      </View>
      <Categories />
      <Text className='text-3xl font-normal mb-8'>Our Products</Text>
    </View>
  )
}

export default HomeHeader