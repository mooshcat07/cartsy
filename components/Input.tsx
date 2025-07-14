import { TextInput } from "react-native";

type InputProps = {
    placeholder: string,
    value: string,
    type: 'text' | 'email' | 'password',
    updater: Function
}

export default function Input({ placeholder, value, type, updater } : InputProps){

    return(
        <TextInput
            placeholder={placeholder}
            value={value}
            secureTextEntry={type === 'password' ? true : false}
            keyboardType={type === 'email' ? 'email-address' : 'default'}
            onChangeText={e => updater(e)}
            className="w-full relative border border-zinc-400 px-4 py-6 rounded-lg text-black placeholder:text-zinc-700"
        />
    )
}