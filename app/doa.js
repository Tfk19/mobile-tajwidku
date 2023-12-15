import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable, FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components";
import React, { useState, useEffect } from 'react';

const noHead = { headerShown: false };

const Doa = () => {

  const [datas, setDatas] = useState([])

  const fetchData = () => {
    fetch("https://doa-doa-api-ahmadramadhan.fly.dev/api")
    .then((response) => response.json())
    .then((data) => {
      setDatas(data);
    }).catch ((err) => console.log(err));
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
              pathname: "surah",
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
        <Header withBack={true} title={"Home"}/>
        <Center>
          <Headers />
          <View style={{ height:20 }} />
          <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          {/* <Boxes/> */}
        </Center>
      </ScrollView>
    // </SafeAreaView>
  );
};

export default Doa;