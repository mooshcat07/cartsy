import TabBarIcons from "@/components/system_components/TabBarIcons";
import { icons } from "@/redux/resourcebundler";
import { Tabs } from "expo-router";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function ProtectedLayout(){

    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                animation: 'fade',
                tabBarButton: (props : any) => 
                    <TouchableOpacity {...props}>
                        {props.children}
                    </TouchableOpacity>,
                tabBarStyle: {
                    height: 120,
                    paddingTop: 40
                },
                tabBarShowLabel: false
                }
            }
        >
            <Tabs.Screen name="home" options={{ tabBarIcon: ({focused}) => <TabBarIcons title="Home" focused={focused} activeIcon={icons.Active_Home} disabledIcon={icons.Home} /> }} />
            <Tabs.Screen name="search" options={{ tabBarIcon: ({focused}) => <TabBarIcons title="Search" focused={focused} activeIcon={icons.Search} disabledIcon={icons.Search} /> }} />
            <Tabs.Screen name="cart" options={{ tabBarIcon: ({focused}) => <TabBarIcons title="Cart" focused={focused} activeIcon={icons.Active_Cart} disabledIcon={icons.Cart} /> }} />
            <Tabs.Screen name="profile" options={{ tabBarIcon: ({focused}) => <TabBarIcons title="Profile" focused={focused} activeIcon={icons.Active_Profile} disabledIcon={icons.Profile} /> }} />
        </Tabs>
    )
}