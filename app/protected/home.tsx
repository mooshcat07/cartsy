import HomeHeader from "@/components/HomeHeader";
import { Dimensions, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){

    const { width } = Dimensions.get('screen')

    return(
        <SafeAreaView className="w-full bg-white flex flex-1 p-8">
            <FlatList
                data={[1,2,3]}
                renderItem={() => <Text>Hie</Text>}
                ListHeaderComponent={() => <HomeHeader />}
                className="w-full relative flex-1"
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}