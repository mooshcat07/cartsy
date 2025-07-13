import { Stack } from "expo-router";
import ReduxProvider from '@/redux/Store'
import '../global.css'

export default function RootLayout() {
  return(
    <ReduxProvider>
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
