import { Stack } from "expo-router";
import ReduxProvider from '@/redux/Store'
import '../global.css'

export default function RootLayout() {
  return(
    <ReduxProvider>
      <Stack />
    </ReduxProvider>
  )
}
