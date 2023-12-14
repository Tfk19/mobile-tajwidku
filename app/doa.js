import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components";

const Doa = () => {
  const Headers = () => {
    return (
      <View w="100%">
        <Link
          href={{
            pathname: "/doa",
          }}>
          <Box rounded="$xl" alignItems="center" w="$50" bg="green" flex={1}>
            <Box position="relative" alignItems="center">
              <Image
                resizeMode="contain"
                role="img"
                source={require('../assets/doas.png')}
              />
              <Heading
                position="absolute"
                textAlign="center"
                color="$white"
              >
              </Heading>
            </Box>
          </Box>
          </Link>
      </View>
    )
  }

  return (
    <ScrollView>
      <Header withBack={true} top="$0" title={"Home"} />
      <Center>
        <View>
          <Headers />
        </View>
        <Heading color="$green800" py="$4" >
          خيركم من تعلّم القران و علّمه
        </Heading>
        <Text color="$green700" bottom="$2" px="$10" textAlign="center" sizes="6xl" >
          “Sebaik-baiknya diantara kamu adalah
          orang yang belajar Al-Qur’an dan
          Mengajarkannya”
        </Text>
        <View>

        </View>
      </Center>
    </ScrollView>
  );
};

export default Doa;
