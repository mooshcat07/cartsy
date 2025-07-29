import React from 'react'
import { Image, View } from 'react-native'

type TabBarProps = {
    title: string,
    focused: boolean,
    activeIcon: any,
    disabledIcon: any,
}

const TabBarIcons = ({title, focused, activeIcon, disabledIcon} : TabBarProps) => {
  
    return (
    <View className='items-center flex justify-center gap-1'>
      { focused ? 
        <>
            <Image
                source={activeIcon}
                resizeMode='cover'
                className='w-8 h-8 relative'
            />
          <View className='w-[7px] h-[7px] rounded-[50%] bg-zinc-700'></View>
        </>
        :
        <Image
            source={disabledIcon}
            resizeMode='contain'
            className='w-8 h-8 relative'
        />
      }
    </View>
  )
}

export default TabBarIcons