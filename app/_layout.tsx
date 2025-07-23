import { Stack } from "expo-router";
import ReduxProvider from '@/redux/Store'
import '../global.css'
import { StatusBar } from "react-native";

export default function RootLayout() {
  return(
    <ReduxProvider>
      <StatusBar backgroundColor={'white'} translucent barStyle={'dark-content'} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="protected" />
      </Stack>
    </ReduxProvider>
  )
}
