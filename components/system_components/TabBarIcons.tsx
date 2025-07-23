import { View, Text, Image } from 'react-native'
import React from 'react'

type TabBarProps = {
    title: string,
    focused: boolean,
    activeIcon: any,
    disabledIcon: any,
}

const TabBarIcons = ({title, focused, activeIcon, disabledIcon} : TabBarProps) => {
  
    return (
    <View>
      { focused ? 
        <>
            <Image
                source={activeIcon}
                resizeMode='cover'
                className='w-2 h-2 relative'
            />
            <Text className='text-xs font-semibold relative mt-1'>{title}</Text>
        </>
        :
        <Image
            source={disabledIcon}
            resizeMode='contain'
            className='w-2 h-2 relative'
        />
      }
    </View>
  )
}

export default TabBarIcons