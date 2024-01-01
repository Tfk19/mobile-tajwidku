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
        {/* <Text>{item.tanggal}</Text> */}
        <Pressable>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Imsyak: ${item.imsyak ? item.imsyak : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Shubuh: ${item.shubuh ? item.shubuh : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`dhuha: ${item.dhuha ? item.dhuha : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`dzuhur: ${item.dzuhur ? item.dzuhur : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`ashr: ${item.ashr ? item.ashr : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`magrib: ${item.magrib ? item.magrib : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`isya: ${item.isya ? item.isya : "N/A"}`}</Text>
          </Box>
        </Pressable>
        {/* <Box bg="$teal" p="$2" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Pressable >
              <Heading fontWeight="bold" color="white">
                {item.ashr}
              </Heading>
              <Text color="white">{item.isya}</Text>
            </Pressable>
        </Box> */}
      </Box>
    );
  };

  return (
    <ScrollView>
      <Header withBack={true} title={"Home"} />

      <Center>
        <Headers />
        <View />
        <Heading color="$green800" py="$4" >
          KOTA SURABAYA
        </Heading>
        <Text color="$green700" bottom="$2" px="$10" textAlign="center" sizes="6xl" bold>
        اُتْلُ مَآ اُوْحِيَ اِلَيْكَ مِنَ الْكِتٰبِ وَاَقِمِ الصَّلٰوةَۗ اِنَّ الصَّلٰوةَ تَنْهٰى عَنِ الْفَحْشَاۤءِ وَالْمُنْكَرِ ۗوَلَذِكْرُ اللّٰهِ اَكْبَرُ ۗوَاللّٰهُ يَعْلَمُ مَا تَصْنَعُوْنَ (العنكبوت : 45)
        
        </Text>
        <Text mt={10} color="$green700" bottom="$2" px="$10" textAlign="justify" fontSize={15}>
        Artinya:"Bacalah Kitab (Al-Qur'an) yang telah diwahyukan kepadamu (Muhammad) dan laksanakanlah salat.
        Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar. Dan (ketahuilah) mengingat Allah (salat)
         itu lebih besar (keutamaannya dari ibadah yang lain). Allah mengetahui apa yang kamu kerjakan." (Al-Ankabut - 45 )"
        </Text>
        <FlatList
          data={datas.length > 0 ? [datas[0]] : []}
          renderItem={renderItem}
        />
      </Center>
    </ScrollView>
  );
};

export default Jadwal;