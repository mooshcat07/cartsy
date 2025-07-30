import Cards from "@/components/Cards";
import HomeHeader from "@/components/HomeHeader";
import { SampleAadvertData } from "@/redux/resourcebundler";
import { useState } from "react";
import { Dimensions, FlatList, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    const [pending, setPending] = useState<boolean>(false);
   
    const HandleRefresh = async() => {
        setPending(true)
        try {
            
        } catch (error) {
            
        } finally{
            setPending(false);
        }
    }

    return(
        <SafeAreaView className="w-full bg-white flex flex-1 px-8 pt-5">
            <FlatList
                data={SampleAadvertData}
                renderItem={({item}) => <Cards title={item.title} category="Clothes" price={item.id} thumbnail={item.thumbnail} />}
                ListHeaderComponent={() => <HomeHeader />}
                className="w-full relative flex-1"
                horizontal={false}
                numColumns={2}
                contentContainerStyle={{
                    justifyContent: 'center',
                    width: Dimensions.get('screen').width,
                }}
                scrollEnabled
                refreshControl={<RefreshControl refreshing={pending} onRefresh={HandleRefresh}  />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}