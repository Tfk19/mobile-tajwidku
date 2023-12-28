import React, { useState, useEffect } from 'react';
import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { View, Image } from "react-native";
import { Header } from "../../components";

const Home = () => {
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
<Box rounded="$xl" alignItems="center" w="$50" bg="green" flex={1}>
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
          <View w="100%">
            <Link
              href={{
                pathname: "login",
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
            <Text textAlign="center">Login</Text>
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
  );
};

export default Home;
