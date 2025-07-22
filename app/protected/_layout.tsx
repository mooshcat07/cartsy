import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function ProtectedLayout(){

    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                animation: 'fade',
            }}
        >
            <Tabs.Screen name="home" />
            <Tabs.Screen name="search" />
            <Tabs.Screen name="cart" />
            <Tabs.Screen name="profile" />
        </Tabs>
    )
}