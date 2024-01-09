import React, { useState, useEffect } from 'react';
import { Center, Heading, Box, ScrollView, Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { View, Image, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../components";

const Jadwal = () => {
  const [datas, setDatas] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [filteringDate, setFilteringDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(null);
  const [dataJadwal, setDataJadwal] = useState(null);
  const [acuanHari, setAcuanHari] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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

  // Test api realtime
  // console.log(currentTime)
  const formattedTime = currentTime.toLocaleTimeString();
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  // const formattedDate = currentTime.toLocaleDateString(undefined, options);
  // Create an object with day, month, and year properties
  // const formattedDate = {};

  const formatter = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'long', year: 'numeric' });
const formattedParts = formatter.formatToParts(currentTime);

// Create an object with day, month, and year properties
const formattedDate = {};
for (const part of formattedParts) {
  formattedDate[part.type] = part.value;
}

useEffect(() => {
  setFilteringDate(formattedDate)
  setCurrentMonth(formattedDate.month)
}, [])

 
  
  // console.log(bulan)
  const jadwalShalat = () => {
    const monthNameToNumber = {
      'January': 1,
      'February': 2,
      'March': 3,
      'April': 4,
      'May': 5,
      'June': 6,
      'July': 7,
      'August': 8,
      'September': 9,
      'October': 10,
      'November': 11,
      'December': 12
    };
  
    const filteringMonth = currentMonth; 
    const bulan = monthNameToNumber[filteringMonth];

    // console.log(`berikut adalah year ${filteringDate}`)
    if (!filteringDate) {
      return (
        <Center>
          <View>
            <Text>Loading...</Text>
          </View>
        </Center>
      );
    }
    fetch(`https://api.myquran.com/v2/sholat/jadwal/1638/${filteringDate.year}/${bulan}/${filteringDate.day}`)
    .then((response) => response.json())
    .then((hasil) => {
      // console.log(`berikut adalah hasil ${JSON.stringify(hasil.data.jadwal)}`)
      setDataJadwal(hasil.data.jadwal)
      setAcuanHari(true)

    })
  }

  

  useEffect(() => {
    jadwalShalat()
  }, [currentTime])

  if (!dataJadwal) {
    return (
      <Center>
        <View>
          <Text>Loading...</Text>
        </View>
      </Center>
    );
  }

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

  // console.log(dataJadwal.imsak)

  const renderItem = ({ item }) => {
    const newsItem = {
      id: item.id,
    };

    return (
      <Box p="$2" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
        {/* <Text>{item.tanggal}</Text> */}
        <Pressable>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Imsyak: ${dataJadwal.imsak ? dataJadwal.imsak : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Shubuh : ${dataJadwal.subuh ? dataJadwal.subuh : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Dhuha : ${dataJadwal.dhuha ? dataJadwal.dhuha : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Dzuhur : ${dataJadwal.dzuhur ? dataJadwal.dzuhur : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Ashr : ${dataJadwal.ashar ? dataJadwal.ashar : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Magrib : ${dataJadwal.maghrib ? dataJadwal.maghrib : "N/A"}`}</Text>
          </Box>
          <Box bg="$teal" p="$5" paddingHorizontal={10} w={350} mb="$3" rounded={"$md"}>
            <Text color='white'>{`Isya' : ${dataJadwal.isya ? dataJadwal.isya : "N/A"}`}</Text>
          </Box>
        </Pressable>
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