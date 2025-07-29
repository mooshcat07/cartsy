import { redux } from '@/redux/Store';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Advertisement from './Advertisement';

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
          className='relative p-3 bg-slate-50 rounded-xl'
        >
          {false && <View className='w-2 h-2 rounded-[50%] absolute top-2 right-1'></View>}
          <Ionicons name="notifications-outline" size={28} color="black" className='relative' />
        </TouchableOpacity>
      </View>
      <Advertisement />
    </View>
  )
}

export default HomeHeader