import { Image, Text, View } from "react-native";
import { staticImages } from '@/redux/resourcebundler'
import { useContext } from "react";
import { redux } from "@/redux/Store";
import { Redirect } from "expo-router";

export default function Index() {
  const { isloading, session } = useContext<any>(redux);

  // if(!isloading && session){
  //   return <Redirect href={'/protected/home'} />
  // }

  // if(!isloading && !session){
  //   return <Redirect href={'/(auth)/signup'} />
  // }

  return (
    <View
      className="w-full flex-1 flex relative items-center justify-center"
    >
      <Image
        source={staticImages.Logo}
        resizeMode="contain"
        className="w-24 h-24 relative"
      />
      <Text className="text-3xl font-semibold my-6 text-blue-500">Shopio</Text>

      {isloading &&
        <Text className="text-xl fontfont-semibold absolute bottom-10">Loading...</Text>
      }
    </View>
  );
}
