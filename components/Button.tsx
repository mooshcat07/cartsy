import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    title: string,
    variant: 'outline' | 'default',
    isloading: boolean,
    action: Function,
}

export default function Button({ title, variant, isloading, action } : ButtonProps){

    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => action()}
            className={`w-full p-5 flex items-center justify-center rounded-lg ${variant === 'default' ? 'bg-blue-500' : 'bg-white border border-blue-600'}`}    
        >
            {isloading ?
                <ActivityIndicator className="text-white relative w-7 h-7" /> :
                <Text className={`text-base font-semibold ${variant === 'default' ? 'text-white' : 'text-blue-500'}`}>{title}</Text>
            }
        </TouchableOpacity>
    )
}