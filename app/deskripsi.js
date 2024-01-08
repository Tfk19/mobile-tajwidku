import { Center, Heading, Box, HStack, ScrollView,Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  Header  from "../components/header";
import { useRoute, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';


const deskripsi = () => {
  // const route = useRoute();
  const params = useLocalSearchParams();
  // console.log(params.id)


  const [deskripsi, setDeskripsi] = useState([])
  const [selectedChapter, setSelectedChapter] = useState([]);

    const fetchData = () => {
        fetch("https://api.quran.com/api/v3/chapters")
          .then((response) => response.json())
          .then((data) => {
            setDeskripsi(data.chapters);
            // ini dengan function setSelectedChapter diisi dengaan filter 
          })
          .catch((err) => console.log(err));
    };    
    

  useEffect(() => {
    fetchData()
  }, [params.id])

  // console.log(deskripsi)

  useEffect(() => {
    // Filter the chapters based on params.id
    const chapter = deskripsi.find((item) => item.id === Number(params.id));
    setSelectedChapter(chapter);
  }, [params.id, deskripsi]);
  
  console.log(selectedChapter)

  if (!selectedChapter) {
    return (
      <Center>
        <View>
          <Text>Loading...</Text>
        </View>
      </Center>
    );
  }
  const idAyat = {
    id: params.id
  }
  const Content = () => {
    if (!deskripsi.length) {
      return <Text>Loading...</Text>;
    }
    
    return (
      
      // <FlatList
      //   data={selectedChapter}
      //   keyExtractor={(item) => item.id.toString()}
      //   renderItem={({ item }) => {
      //       console.log(`Ini adalah item visual ${item}`)
            
      //       return (
        <Center>
          <Box bg="" p="$2" paddingHorizontal={10} w={350} mb="$3">
            {/* <Link href={{
                pathname: "/deskripsi",
                params: newsItem,
              }} asChild> */}
                
              <Box style={styles.centeredText}>
                <Heading fontWeight="bold" color="black">
                  Diturunkan di :
                </Heading>
                <Text>{selectedChapter.revelation_place}</Text>
                <Heading fontWeight="bold" color="black">
                  Nama dalam Bahasa Arab :
                </Heading>
                <Text>{selectedChapter.name_arabic}</Text>
                <Heading fontWeight="bold" color="black">
                  Nama dalam Bahasa Inggris :
                </Heading>
                <Text>{selectedChapter.translated_name && (
                  <Text>{selectedChapter.translated_name.name}</Text>
                )}</Text>
                <Heading fontWeight="bold" color="black">
                  Jumlah Ayat :
                </Heading>
                <Text>
                  {selectedChapter.verses_count}
                </Text>
                {/* <Text color="white">{item.name_arabic}</Text> */}
                {/* Add other relevant information here */}
              </Box>
            {/* </Link> */}
          </Box>

          {/* Button to ayat */}
          <Box bg="$#27847D" p="$5" borderRadius={10} >
            <Link href={{
                  pathname: "/ayat",
                  params: idAyat
                }} asChild >
                <TouchableOpacity >
                  <Text color="white">Baca Surat {selectedChapter.name_arabic}</Text>
                </TouchableOpacity>
            </Link>
          </Box>
          </Center>
      //   }}
      // />
    )
  }

  return (
    <View >
      {/* Headers */}
      <Header withBack={true} />
      {/* Headers End */}
      <Center mt={20}>
        <Box bg="$#27847D" paddingHorizontal={100} paddingVertical={20} borderRadius={10}>
          <Text color="white">Deskripsi Surat</Text>
        </Box>
      </Center>
      {/* Content */}
        <Content style={styles.centeredText} />
      {/* Content End */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center', // Horizontal centering
    textAlignVertical: 'center', // Vertical centering
  },
});

export default deskripsi