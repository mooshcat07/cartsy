import { staticImages } from "@/redux/resourcebundler";
import { Stack } from "expo-router";
import { Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthenticationLayout(){

return(
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
    >
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height" }
            keyboardVerticalOffset={60}
            className="w-full flex-1"
        >
            <SafeAreaView
                className="w-full flex-1 relative px-10 bg-white"
            >
                <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
                <View className='w-full py-20 flex items-center justify-center flex-row gap-4'>
                    <Image
                        source={staticImages.Logo}
                        resizeMode="contain"
                        className="w-12 h-12 relative"
                    />
                    <Text className="text-4xl font-semibold text-blue-600">Shopio</Text>
                </View>
                <Stack
                    screenOptions={{
                        headerShown: false,
                        animation: 'fade',
                    }}
                >
                    <Stack.Screen name="signup" />
                    <Stack.Screen name="signin" />
                </Stack>
            </SafeAreaView>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    )
}