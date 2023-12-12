import { Center, Heading, Box, HStack, ScrollView,Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";


const api = () => {

    // const Headers = () => {
    // return (
    //     <View>
    //         <Link href="/surah" asChild>
    //             <Pressable>
    //             <Text mt={10}>Back</Text>
    //             </Pressable>
    //         </Link>
    //     </View>
    //     )
    // }

    const Content = () => {
        return (
          <View>
            <Box justifyContent="center" alignItems="center" pt={20} flexDirection="column">
              {/* <Text>Diturunkan di :</Text>
              <Text fontWeight="bold">(Mekkah)</Text>
              <Text>Nama dalam bahasa arab :</Text>
              <Text fontWeight="bold">(الفاتحة)</Text>
              <Text>Jumlah Ayat</Text>
              <Text fontWeight="bold">(7)</Text> */}
            <Text>
                Api
            </Text>
              {/* button */}
              {/* <Box p={5} bg="$green" mt={120}>
                <Link href="/api" asChild>
                  <Pressable>
                    <Text p={5} color="white">Read More</Text>
                  </Pressable>
                </Link>
              </Box> */}
              {/* button end */}
            </Box>
          </View>
        )
    }


  return (
    <View>
        <Header withBack={true} />
        <Center mt={20}>
        <Box bg="$green" paddingHorizontal={100} paddingVertical={20}>
          <Text color="white">Al_Fatihah</Text>
        </Box>
        {/* Content */}
         <Content />
        {/* Content End */}

      </Center>

    </View>
  )
}

export default api