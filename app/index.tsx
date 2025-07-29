import { staticImages } from '@/redux/resourcebundler';
import { redux } from "@/redux/Store";
import { Redirect } from "expo-router";
import { useContext } from "react";
import { ActivityIndicator, Image, Text, View } from "react-native";

export default function Index() {
  const { isloading, user } = useContext<any>(redux);

  if(!isloading && user){
    return <Redirect href={'/protected/home'} />
  }

  if(!isloading && !user){
    return <Redirect href={'/(auth)/signup'} />
  }

  return (
    <View
      className="w-full flex-1 flex relative items-center justify-center bg-white"
    >
      <Image
        source={staticImages.Logo}
        resizeMode="contain"
        className="w-24 h-24 relative"
      />
      <Text className="text-3xl font-semibold my-6 text-blue-500">Shopio</Text>

      {isloading &&
        <ActivityIndicator className="text-black absolute bottom-10 w-9 h-9" />
      }
    </View>
  );
}
