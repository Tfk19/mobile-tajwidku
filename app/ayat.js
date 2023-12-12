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


  const [surat, setSurat] = useState([])
  const [selectedSurat, setSelectedSurat] = useState({});

    const fetchData = () => {
        fetch(`https://equran.id/api/v2/surat/${params.id}`)
          .then((response) => response.json())
          .then((data) => {
            setSurat(data.data);
            // ini dengan function setSelectedChapter diisi dengaan filter 
          })
          .catch((err) => console.log(err));
    };    
    

  useEffect(() => {
    fetchData()
  }, [params.id])

  // console.log(deskripsi)

//   useEffect(() => {
    
//     const chapter = surat.find((item) => item.nomor === Number(params.id));
//     setSelectedSurat(chapter);
//   }, [params.id, surat]);
  
//   console.log(surat)

  if (!surat) {
    return (
      <Center>
        <View>
          <Text>Loading...</Text>
        </View>
      </Center>
    );
  }

  
  console.log(surat.arti)
  const Content = () => {
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
                {/* <Heading fontWeight="bold" color="black">
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
                )}</Text> */}
                <Heading fontWeight="bold" color="black">
                    Ayat Pertama :
                </Heading>
                <Text>{surat.ayat && (
                  <Text>{surat.ayat.teksArab}</Text>
                )}</Text>
                {/* <Text color="white">{item.name_arabic}</Text> */}
                {/* Add other relevant information here */}
              </Box>
            {/* </Link> */}
          </Box>

          </Center>
      //   }}
      // />
    )
  }

  return (
    <View >
      {/* Headers */}
      {/* <Header withBack={true} /> */}
      {/* Headers End */}
      <Center mt={20}>
        <Box bg="$#27847D" paddingHorizontal={100} paddingVertical={20}>
          <Text color="white">{surat.namaLatin}</Text>
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