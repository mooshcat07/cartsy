import { Tabs } from "expo-router";

export default function ProtectedLayout(){

    return(
        <Tabs
            screenOptions={{
                headerShown: false,
                animation: 'fade',
            }}
        >
            <Tabs.Screen name="home" />
        </Tabs>
    )
}