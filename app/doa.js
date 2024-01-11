import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable, FlatList } from "react-native";
import LottieView from 'lottie-react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components";
import React, { useState, useEffect } from 'react';


const noHead = { headerShown: false };

const Doa = () => {

  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };  
  useEffect(() => {
    fetchData()
  }, [])

//   console.log(users)

  const Headers = () => {
    return (
      <Box position="relative">
        <View w="100%">
          <Link
            href={{
              pathname: "doa",
            }}
          >
            <Box rounded="$xl" alignItems="center" w="$50" bg="">
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../assets/doas.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                >
                </Heading>
              </Box>
            </Box>
          </Link>
        </View>
      </Box>
    )
  };
  const renderItem = ({ item }) => {
    const newsItem = {
      id: item.id,
    };
    return(
      <Box p="$2" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
      <Link href={{
        pathname: "/deskripsi",
        params: newsItem,
      }} asChild >
        <Pressable>
        <Box bg="$teal" p="$2" paddingHorizontal={10} w={350} rounded={"$md"} >
          <Heading fontWeight="bold" color="white">
            {item.doa}
          </Heading>
          </Box>
          <Text marginTop={10} bold fontSize={20}>{item.ayat}</Text>
          <Text >"{item.latin}"</Text>
          {/* Add other relevant information here */}
        </Pressable>
      </Link>
    </Box>
    );
    
  };
  return (
    // <SafeAreaView >
    <ScrollView>
    <Header withBack={true} title={"Home"} />
    <Center>
      <Headers />
      {loading ? (
        <Box width="70%" aspectRatio={1} overflow="hidden" borderRadius={16}>
          <LottieView
            source={require('../animation.json')}
            autoPlay
            loop
            resizeMode="cover"
          />
        </Box>
      ) : (
        <>
         <Box marginBottom={140}>
        <LottieView
          source={require('../doa.json')}
          autoPlay
          loop
          width={150}
          height={200}
          marginHorizontal={10}
          marginLeft={-80}
          marginTop={-20}
        />
        </Box>
          <View style={{ height: 20 }} />
          <Text color="$teal700" bottom="$2" px="$10" textAlign="center" sizes="$xl" bold>
          وَقَالَ رَبُّكُمُ ادْعُوْنِيْٓ اَسْتَجِبْ لَكُمْ ۗاِنَّ الَّذِيْنَ يَسْتَكْبِرُوْنَ عَنْ عِبَادَتِيْ سَيَدْخُلُوْنَ جَهَنَّمَ دَاخِرِيْنَ        
        </Text>
        <Text mt={10} color="$teal700" bottom="$2" px="$10" textAlign="justify" fontSize={15}>
        Artinya:“berdoalah kepada-Ku, niscaya akan Kuperkenankan bagimu. Sesungguhnya orang-orang yang menyombongkan diri dari menyembah-Ku akan masuk Neraka Jahannam dalam keadaan hina dina”. (QS. Al-Mukmin: 60).
        </Text>
          <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </Center>
  </ScrollView>
    // </SafeAreaView>
  );
};

export default Doa;