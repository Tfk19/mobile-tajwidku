import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components";

const Home = () => {
  const Headers = () => {
    return (
      <View w="100%">
        <Link
          href={{
            pathname: "/tajwid",
          }}>
          <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
            <Box position="relative">
              <Image
                resizeMode="contain"
                role="img"
                source={require('../../assets/Frame1.png')}
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
        </Link>
      </View>
    )
  }
  const Boxes = () => {
    return (
      <View>
        <HStack space="xl" alignItems="center" py="$5">
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../../assets/Frame3.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                  fontWeight="bold"
                >
                  IDZHAR
                </Heading>
              </Box>
            </Box>
          </View>
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../../assets/Frame3.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                >
                  IKHFAA'
                </Heading>
              </Box>
            </Box>
          </View>
        </HStack>
        <HStack space="xl" alignItems="center">
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../../assets/Frame3.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                >
                  IDGHAM
                </Heading>
              </Box>
            </Box>
          </View>
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../../assets/Frame3.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                >
                  IQLAAB
                </Heading>
              </Box>
            </Box>
          </View>
        </HStack>
        <HStack space="xl" alignItems="center" py="$5">
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../../assets/Frame3.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                  fontWeight="bold"
                >
                  IDZHAR
                </Heading>
              </Box>
            </Box>
          </View>
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" bg="green"  >
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../../assets/Frame3.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                >
                  IKHFAA'
                </Heading>
              </Box>
            </Box>
          </View>
        </HStack>

      </View>
    )
  }
  return (
    <SafeAreaView >
      <ScrollView>
        <Header top="$0" title={"Home"} />
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
            <Boxes />
          </View>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
