import { Center, Heading, Box, ScrollView,Text } from "@gluestack-ui/themed";
import { View,Image, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components"

const Tajwid = () => {
  const First = () => {
    return (
      <View w="100%">
  <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
    <Box position="relative">
      <Image
        resizeMode="contain"
        role="img"
        source={require('../assets/Frame1.png')}
      />
      <Heading
        position="absolute"
        top="0"
        left="0"
        ml="$4"
        mb="$4"
        color="$white"
      >
            IDZHAR
      </Heading>
    </Box>
</Box>
</View>
    )
  }
  return (
    <SafeAreaView >
    <ScrollView>
    <Header title={"Home"} withBack={true} />
    <Center>
      <View>
        <First />
      </View>
    <Heading color="$green800" py="$4" >
    IDZHAR HALQI
    </Heading>
    <Text color="$green700" bottom="$2" px="$10" textAlign="center" sizes="6xl" >
Merupakan nun sukun / tanwin bertemu salah satu huruf  :
ا,ح,خ,ع,غ,ه
    </Text>
    <View>
    </View>
    </Center>
    </ScrollView>
  </SafeAreaView>
  );
};

export default Tajwid;
