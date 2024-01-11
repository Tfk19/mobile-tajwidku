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

const Hadist = () => {

  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true);
  const fetchData = () => {
    fetch("https://api.hadith.gading.dev/books/")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data.data);
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
              pathname: "hadist",
            }}
          >
            <Box rounded="$xl" alignItems="center" w="$50" bg="">
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../assets/Hadists.png')}
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
      <Box bg="teal" p="$2" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
      <Link href={{
        pathname: "/deskripsi_hadist",
        params: newsItem,
      }} asChild >
        <Pressable>
          <Heading fontWeight="bold" color="white">
            {item.name}
          </Heading>
          <Text color="white" marginTop={5} fontSize={20}>Hadist yang diriwayatkan : {item.available}</Text>
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
          <View style={{ height: 20 }} />
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

export default Hadist;