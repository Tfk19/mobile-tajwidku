import { Center, Heading, Box, HStack, ScrollView, Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable, FlatList } from "react-native";
import LottieView from 'lottie-react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components";
import React, { useState, useEffect } from 'react';

const noHead = { headerShown: false };

const surah = () => {

  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch('https://api.quran.com/api/v3/chapters')
      .then((response) => response.json())
      .then((data) => {
        setDatas(data.chapters);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  source={require('../../assets/al-qurans.png')}
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
      <TouchableOpacity>
      <Box bg="$teal" p="$2" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
      <Link href={{
        pathname: "/deskripsi",
        params: newsItem,
      }} asChild >
        <TouchableOpacity>
          <Heading fontWeight="bold" color="white">
            {item.name_simple}
          </Heading>
          <Text color="white">{item.name_complex}</Text>
          <Text color="white">{item.name_arabic}</Text>
          {/* Add other relevant information here */}
        </TouchableOpacity>
      </Link>
    </Box>
    </TouchableOpacity>
    );
    
  };
  return (

    <ScrollView>
    <Header title={'Home'} />
    <Center>
      <Headers />
      {loading ? (
        <Box width="70%" aspectRatio={1} overflow="hidden" borderRadius={16}>
          <LottieView
            source={require('../../animation.json')}
            autoPlay
            loop
            resizeMode="cover"
          />
        </Box>
      ) : (
        <>
          <View height= {20} />
          <FlatList
          marginBottom={50}
            data={datas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </Center>
  </ScrollView>

  );
};

export default surah;