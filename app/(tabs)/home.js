import React, { useState, useEffect } from 'react';
import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { View, Image } from "react-native";
import { Header } from "../../components";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';


const Home = () => {
  const navigation = useNavigation();
  const handleNavigation = (route) => {
    navigation.navigate(route);
  };
  const Headers = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentTime.toLocaleDateString(undefined, options);

    return (
      <View w="100%">
        <Link
          href={{
            pathname: 'home',
          }}>
          <Box rounded="$xl" alignItems="center" w="$50" bg="teal" flex={1}>
            <Box
              position="relative"
              alignItems="center"
              justifyContent="center"
              flex={1}>
              <Image
                resizeMode="contain"
                role="img"
                source={require('../../assets/Frame1.png')}
              />
              <Box flexDirection="column" alignItems="center" justifyContent="center" position="absolute">
                <Heading fontSize={40} paddingTop={20} textAlign="center" color="$white">
                  {formattedTime}
                </Heading>
                <Text fontSize={16} textAlign="center" color="$white">
                  {formattedDate}
                </Text>
              </Box>
            </Box>
          </Box>
        </Link>
      </View>
    );
  };
  const Boxes = () => {
    return (
      <View>
        <HStack space="xl" alignItems="center" py="$5">
          <View w="100%">
            <Link
              href={{
                pathname: "/jadwal",
              }}>
              <Box rounded="$xl" alignItems="center" w="$50"   >
                <Box position="relative">
                  <Image
                    resizeMode="contain"
                    role="img"
                    source={require('../../assets/jam.png')}
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
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Text textAlign="center">Jadwal</Text>
            <Text textAlign="center">Shalat</Text>
          </View>
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" mr="10%" ml="10%"  >
              <Link
                href={{
                  pathname: "surah",
                }}>
                <Box position="relative">
                  <Image
                    resizeMode="contain"
                    role="img"
                    source={require('../../assets/al-quran.png')}
                  />
                  <Heading
                    position="absolute"
                    top="$100"
                    left="0"
                    ml="$5"
                    mr="$5"
                    color="$white"
                  >
                  </Heading>
                </Box>
              </Link>
            </Box>
            <Text textAlign="center">Al-Qur'an</Text>
          </View>
          <View w="100%">
            <Link
              href={{
                pathname: "/doa",
              }}>
              <Box rounded="$xl" alignItems="center" w="$50"  >
                <Box position="relative">
                  <Image
                    resizeMode="contain"
                    role="img"
                    source={require('../../assets/doa.png')}
                  />
                  <Heading
                    position="absolute"
                    top="$100"
                    left="0"
                    ml="$5"
                    mr="$5"
                    mb="$4"
                    color="$white"
                  >
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Text textAlign="center">Doa-Doa</Text>
          </View>
        </HStack>
        <HStack space="xl" alignItems="center" mt="$0">
          <View w="100%">
            <Link
              href={{
                pathname: "/bacaan",
              }}>
              <Box rounded="$xl" alignItems="center" w="$50"   >
                <Box position="relative">
                  <Image
                    resizeMode="contain"
                    role="img"
                    source={require('../../assets/bacaan.png')}
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
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Text textAlign="center">Bacaanku</Text>
          </View>
          <View w="100%">
            <Box rounded="$xl" alignItems="center" w="$50" mr="10%" ml="10%"  >
              <Link
                href={{
                  pathname: "/hadist",
                }}>
                <Box position="relative">
                  <Image
                    resizeMode="contain"
                    role="img"
                    source={require('../../assets/hadist.png')}
                  />
                  <Heading
                    position="absolute"
                    top="$100"
                    left="0"
                    ml="$5"
                    mr="$5"
                    color="$white"
                  >
                  </Heading>
                </Box>
              </Link>
            </Box>
            <Text textAlign="center">Hadist</Text>
          </View>
          <View w="100%">
            <Link
              href={{
                pathname: "quiz",
              }}>
              <Box rounded="$xl" alignItems="center" w="$50"   >
                <Box position="relative">
                  <Image
                    resizeMode="contain"
                    role="img"
                    source={require('../../assets/quiz.png')}
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
                  </Heading>
                </Box>
              </Box>
            </Link>
            <Text textAlign="center">Quiz</Text>
          </View>
        </HStack>


      </View>
    )
  }
  return (
    <ScrollView>
      <Header top="$0" title={"Home"} />
      <Center>
        <View>
          <Headers />
        </View>
        
        <Box marginBottom={10}>
        <LottieView
          source={require('../../waktu.json')}
          autoPlay
          loop
          width={120}
          height={120}
          marginHorizontal={10}
          marginLeft={-160}
          marginTop={0}
        />
        </Box>
         <Text paddingLeft={150} size='xl' bold color="$teal800" py="$4" >
          الوقت أثمن من الذهب
        </Text>
        <Text paddingLeft={180} color="$teal700" bottom="$4" px="$10" textAlign="right" sizes="6xl" >
          “ًWaktu Lebih Berharga Daripada Emas”
        </Text>
        <View marginTop={-10}>
          <Boxes />
        </View>
      </Center>
      <View marginTop= {20} marginLeft= {40} flexDirection= 'row' alignItems= 'center'>
        <Box backgroundColor='teal' borderRadius={5} >
          <Text bold size='l' color='white' padding={10} marginRight={100}>
            Materi Tajwid
          </Text>
        </Box>
        <TouchableOpacity onPress={() => handleNavigation('materi')} >
          <Text color= 'teal' marginLeft={40} >See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView marginRight={40} horizontal showsHorizontalScrollIndicator={false}>
        <Box marginHorizontal={40} marginVertical={20} marginBottom={80} flexDirection="row">
          <TouchableOpacity onPress={() => handleNavigation('Materi1')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Idzhar Halqi</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Materi2')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Idgham Bi Ghunnah</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Materi3')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Idgham Bila Ghunnah</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Materi4')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Iqlab</Text>
            </Box>
          </TouchableOpacity>
             <TouchableOpacity onPress={() => handleNavigation('Materi5')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Ikhfa Haqiqi</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </ScrollView>
      <View marginTop= {-50} marginLeft= {40} flexDirection= 'row' alignItems= 'center'>
        <Box backgroundColor='teal' borderRadius={5} >
          <Text bold size='l' color='white' padding={10} marginRight={110}>
            Quiz Tajwid
          </Text>
        </Box>
        <TouchableOpacity onPress={() => handleNavigation('quiz')} >
          <Text color= 'teal' marginLeft={40} >See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView marginRight={40} horizontal showsHorizontalScrollIndicator={false}>
        <Box marginHorizontal={40} marginVertical={20} marginBottom={80} flexDirection="row">
          <TouchableOpacity onPress={() => handleNavigation('Soal1')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Idzhar Halqi</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Soal2')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Idgham Bi Ghunnah</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Soal3')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Idgham Bila Ghunnah</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleNavigation('Soal4')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Iqlab</Text>
            </Box>
          </TouchableOpacity>
             <TouchableOpacity onPress={() => handleNavigation('Soal5')}>
            <Box
              position="relative"
              borderRadius={10}
              width={120}
              height={100}
              backgroundColor="teal"
              marginRight={10}
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
            >
              <Image
                resizeMode="contain"
                source={require('../../assets/Frame3.png')}
              />
              <Text position="absolute" color="white">Ikhfa Haqiqi</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
