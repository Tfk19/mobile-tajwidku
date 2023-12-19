import React, { useState, useEffect } from 'react';
import { Center, Heading, Box, ScrollView, Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { View, Image, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components";

const Jadwal = () => {
  const [datas, setDatas] = useState([]);

  const fetchData = () => {
    fetch("https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/surabaya/2023/12.json")
      .then((response) => response.json())
      .then((data) => {
        setDatas(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

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
                  source={require('../assets/jadwals.png')}
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
    );
  };

  const renderItem = ({ item }) => {
    const newsItem = {
      id: item.id,
    };

    return (
      <Box p="$2" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
        <Link
          href={{
            pathname: "/deskripsi",
            params: newsItem,
          }}
          asChild
        >
          <Pressable>
            <Text>{`Imsyak: ${item.imsyak ? item.imsyak : "N/A"}`}</Text>
            <Text>{`Shubuh: ${item.shubuh ? item.shubuh : "N/A"}`}</Text>
          </Pressable>
        </Link>
      </Box>
    );
  };

  return (
    <ScrollView>
      <Header withBack={true} title={"Home"} />
      <Center>
        <Headers />
        <View style={{ height: 20 }} />
        <FlatList
          data={datas}
          renderItem={renderItem}
        />
      </Center>
    </ScrollView>
  );
};

export default Jadwal;