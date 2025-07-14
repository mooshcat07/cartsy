import { TextInput } from "react-native";

type InputProps = {
    placeholder: string,
    value: string,
    updater: Function
}

export default function Input({placeholder, value, updater} : InputProps){

    return(
        <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={e => updater(e)}
            className="w-full relative border border-zinc-400 px-4 py-6 rounded-lg text-black placeholder:text-zinc-700"
        />
    )
}