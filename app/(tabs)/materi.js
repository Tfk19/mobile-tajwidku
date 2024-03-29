import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components";
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Materi = () => {
  const navigation = useNavigation();

  const navigateToMateri1 = () => {
    navigation.navigate('Materi1');
  };
  const navigateToMateri2 = () => {
    navigation.navigate('Materi2');
  };
  const navigateToMateri3 = () => {
    navigation.navigate('Materi3');
  };
  const navigateToMateri4 = () => {
    navigation.navigate('Materi4');
  };
  const navigateToMateri5 = () => {
    navigation.navigate('Materi5');
  };
  const navigateToMateri6 = () => {
    navigation.navigate('Materi6');
  };
  const navigateToMateri7 = () => {
    navigation.navigate('Materi7');
  };
  const navigateToMateri8 = () => {
    navigation.navigate('Materi8');
  };

  const Headers = () => {
    return (
      <View w="100%">
        <Link
          href={{
            
          }}>
          <Box rounded="$xl" alignItems="center" w="$50" bg="teal" flex={1}  >
            <Box position="relative" alignItems="center" justifyContent="center" flex={1}>
              <Image
                resizeMode="contain"
                role="img"
                source={require('../../assets/materis.png')}
              />
              <Box
                flexDirection="column"
                alignItems="center"  // Center horizontally
                justifyContent="center"  // Center vertically
                textAlign="center"
                position="absolute"
              >
                {/* <Heading fontSize={40} paddingTop={20} color="$white">
                  MATERI
                </Heading>
                <Text fontSize={16} color="$white">
                  TAJWIDKU
                </Text> */}
              </Box>
            </Box>
          </Box>
        </Link>
      </View>
    )
  }

  return (
    <ScrollView>
      <Header title={"Home"} />
      <Center>
        <View>
          <Headers />
        </View>
        <Box marginBottom={70}>
        <LottieView
          source={require('../../buku.json')}
          autoPlay
          loop
          width={200}
          height={200}
          marginHorizontal={10}
          marginLeft={-100}
          marginTop={-50}
        />
        </Box>
         <Text size='xl' bold color="$teal800" py="$4" >
          خيركم من تعلّم القران و علّمه
        </Text>
        <Text color="$teal700" bottom="$2" px="$10" textAlign="center" sizes="6xl" >
          “Sebaik-baiknya diantara kamu adalah
          orang yang belajar Al-Qur’an dan
          Mengajarkannya”
        </Text>
        <View marginTop= {20} marginLeft= {0} flexDirection= 'row' alignItems= 'center'>
        <Box backgroundColor='teal' borderRadius={5} >
          <Text bold size='l' color='white' padding={10} marginRight={100}>
            Hukum Nun Sukun
          </Text>
        </Box>
      </View>
        <View>
          <HStack space="xl" alignItems="center" py="$5">
          <View w="100%">
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri1}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />
                    <Text
                      position="absolute"
                      top={100}
                      left="$4"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IDZHAR   HALQI
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
            <View w="100%">
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri2}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />
                    <Text
                      position="absolute"
                      top={100}
                      left="$4"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IDHGAM BI GHUNNAH
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
          </HStack>
          <HStack space="xl" alignItems="center">
            <View w="100%">
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri3}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />
                    <Text
                      position="absolute"
                      top={80}
                      left="$4"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IDHGAM   BILA GHUNNAH
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
            <View w="100%">
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri4}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />
                    <Text
                      position="absolute"
                      top={110}
                      left="$4"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IQLAB
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
          </HStack>
          <HStack space="xl" alignItems="center" py="$5">
            <View w="100%" bottom={40} top={0}>
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri5}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />

                    <Text
                      position="absolute"
                      top={100}
                      left="$4"
                      alignItems="center"
                      alignContent="center"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IKHFA'    HAQIQI
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
          </HStack>
        </View>
        <View marginTop= {10} marginLeft= {0} flexDirection= 'row' alignItems= 'center'>
        <Box backgroundColor='teal' borderRadius={5} >
          <Text bold size='l' color='white' padding={10} marginRight={100}>
            Hukum Mim Sukun
          </Text>
        </Box>
      </View>
        <View>
          <HStack space="xl" alignItems="center" py="$5">
            <View w="100%">
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri6}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />
                    <Text
                      position="absolute"
                      top={100}
                      left="$4"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IDGHAM   MIMI
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
            <View w="100%">
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri8}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />
                    <Text
                      position="absolute"
                      top={100}
                      left="$4"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IDZHAR SYAFAWI
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
          </HStack>
          <HStack space="xl" alignItems="center">
            <View w="100%">
              <Box rounded="$xl" alignItems="center" w="$50" bg="white"  >
                <TouchableOpacity onPress={navigateToMateri7}>
                  <Box position="relative">
                    <Image
                      resizeMode="contain"
                      role="img"
                      source={require('../../assets/Frame3.png')}
                    />
                    <Text
                      position="absolute"
                      top={100}
                      left="$4"
                      color="$white"
                      fontWeight="bold"
                      fontSize={20}
                    >
                      IKHFA'   SYAFAWI
                    </Text>
                  </Box>
                </TouchableOpacity>
              </Box>
            </View>
          </HStack>
  
        </View>
        <View>
          <Text paddingBottom={60}>

          </Text>
        </View>
      </Center>
    </ScrollView>
  );
};

export default Materi;
