import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable, FlatList } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from 'react-native-gesture-handler';
import { Header } from "../../components";
import React, { useState, useEffect } from 'react';

const noHead = { headerShown: false };

const surah = () => {

    const [datas, setDatas] = useState([])

    const fetchData = () => {
        fetch("https://api.quran.com/api/v3/chapters")
          .then((response) => response.json())
          .then((data) => {
            setDatas(data.chapters);
          })
          .catch((err) => console.log(err));
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
              pathname: "/tajwid",
            }}
          >
            <Box rounded="$xl" alignItems="center" w="$50" bg="">
              <Box position="relative">
                <Image
                  resizeMode="contain"
                  role="img"
                  source={require('../../assets/Frame1.png')}
                />
                <Heading
                  position="absolute"
                  top="$100"
                  left="0"
                  ml="$4"
                  mb="$4"
                  color="$white"
                >
                  Qur’an
                </Heading>
              </Box>
            </Box>
          </Link>
        </View>
      </Box>
    )
  }
  const Boxes = () => {

    const noHead = { headerShown: false };
    return (
        // <SafeAreaView>
        //     <ScrollView>
    <Center p="$5">
      <FlatList
        data={datas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
            // console.log(item.id)
            const newsItem = {
                id: item.id,
              };
            return (
          <Box bg="$green" p="$2" paddingHorizontal={10} w={350} mb="$3">
            <Link href={{
                pathname: "/deskripsi",
                params: newsItem,
              }} asChild>
                
              <Pressable>
                <Heading fontWeight="bold" color="white">
                  {item.name_simple}
                </Heading>
                <Text color="white">{item.name_complex}</Text>
                <Text color="white">{item.name_arabic}</Text>
                {/* Add other relevant information here */}
              </Pressable>
            </Link>
          </Box>
            )
        }}
      />
    </Center>
    //   </ScrollView>
    //   </SafeAreaView>
    )
  }
  return (
    <SafeAreaView >
      <ScrollView>
      <Header title={"Home"}/>
      <Center>
        <View>
          <Headers />
        </View>
       
        <View>
          <Boxes/>
        </View> 
      </Center>
      </ScrollView>
    </SafeAreaView>
  );
};

export default surah;
