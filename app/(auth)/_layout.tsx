import { Stack } from "expo-router";
import { Keyboard, KeyboardAvoidingView, Platform, StatusBar, Text, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthenticationLayout(){

return(
    <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
    >
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height" }
            className="w-full flex-1"
        >
            <SafeAreaView
                className="w-full flex-1 relative"
            >
                <StatusBar backgroundColor={'transparent'} barStyle={'dark-content'} translucent />
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