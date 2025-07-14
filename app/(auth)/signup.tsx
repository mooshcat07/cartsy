import Button from "@/components/Button";
import Input from "@/components/Input";
import { redux } from "@/redux/Store";
import { Link, router } from "expo-router";
import { useContext, useState } from "react";
import { Text, View } from "react-native";

type User = {
    fullname: null | string,
    email: null | string,
    password: null | string
}

export default function Signup(){
    const { SignUpWithEmailPassword } = useContext<any>(redux)
    const [pending, setpending] = useState(false);
    const [userDetails, setuserDetails] = useState<User>({
        fullname: null,
        email: null,
        password: null
    });

    const Handlesignup = async() => {
        setpending(true);

        try {
            await SignUpWithEmailPassword({
                fullname: userDetails.fullname,
                email: userDetails.email,
                password: userDetails.password
            });

            router.replace('/protected/home');
        } catch (error : any) {
            alert(error.message);
        } finally {
            setpending(false);
        }
    }

    return(
        <View className="bg-white w-full flex-1 relative">
            <Text 
                className="text-2xl font-medium"
            >Create your account</Text>
            <View className="w-full relative flex gap-8 my-10">
                <Input placeholder="Enter your fullname" value={userDetails.fullname} type="text" updater={e => setuserDetails(prev => ({...prev, fullname: e}))} />
                <Input placeholder="Enter your Email" value={userDetails.email} type="email" updater={e => setuserDetails(prev => ({...prev, email: e}))} />
                <Input placeholder="Create your password" value={userDetails.password} type="password" updater={e => setuserDetails(prev => ({...prev, password: e}))} />
            </View>
            <Button title="sign up" variant="default" action={Handlesignup} />
            <View className="relative my-12 flex items-center justify-center flex-row">
                <Text className="text-xl font-medium text-zinc-500">Or sign up with</Text>
            </View>
            <View className="w-full relative grid grid-col-2 gap-7">
                {/* implement 3rd party 2Auth services, {google, apple, twitter} */}
            </View>
            <View className="w-full flex items-center justify-end flex-1 py-24">
                <Text className="text-lg font-medium text-center text-black">Already have an account? <Link href={'/signin'} className="text-blue-500 ml-1 p-2">Signin</Link></Text>
            </View>
        </View>
    )
}