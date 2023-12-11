import { Center, Heading, Box, HStack, ScrollView,Text } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  Header  from "../components/header";
import { useRoute, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';


const deskripsi = () => {
  // const route = useRoute();
  const params = useLocalSearchParams();
  console.log(params.id)


  const [deskripsi, setDeskripsi] = useState([])
  const [selectedChapter, setSelectedChapter] = useState([]);

    const fetchData = () => {
        fetch("https://api.quran.com/api/v3/chapters")
          .then((response) => response.json())
          .then((data) => {
            setDeskripsi(data.chapters);
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

  // const {
  //   bismillah_pre,
  //   chapter_number,
  //   id,
  //   name_arabic,
  //   name_complex,
  //   name_simple,
  //   pages,
  //   revelation_order,
  //   revelation_place,
  //   translated_name,
  //   verses_count,
  // } = selectedChapter;
  const Content = () => {
    return (
      // <View>
      //   <Box justifyContent="center" alignItems="center" pt={20} flexDirection="column">
      //     <Text>Diturunkan di :</Text>
      //     <Text fontWeight="bold">{selectedChapter[0]}</Text>
      //     <Text>Nama dalam bahasa arab :</Text>
      //     <Text fontWeight="bold">(الفاتحة)</Text>
      //     <Text>Jumlah Ayat</Text>
      //     <Text fontWeight="bold">(7)</Text>

      //     <Box p={5} bg="$green" mt={120}>
      //       <Link href="/api" asChild>
      //         <Pressable>
      //           <Text p={5} color="white">Read More</Text>
      //         </Pressable>
      //       </Link>
      //     </Box>
      //   </Box>
      // </View>
      <FlatList
        data={selectedChapter}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
            console.log(`Ini adalah item visual ${item}`)
            
            return (
          <Box bg="$green" p="$2" paddingHorizontal={10} w={350} mb="$3">
            {/* <Link href={{
                pathname: "/deskripsi",
                params: newsItem,
              }} asChild> */}
                
              <Pressable>
                <Heading fontWeight="bold" color="white">
                  {item.revelation_order}
                </Heading>
                <Text color="white">{item.revelation_place}</Text>
                {/* <Text color="white">{item.name_arabic}</Text> */}
                {/* Add other relevant information here */}
              </Pressable>
            {/* </Link> */}
          </Box>
            )
        }}
      />
    )
  }

  return (
    <View >
      {/* Headers */}
      <Header withBack={true} />
      {/* Headers End */}
      <Center mt={20}>
        <Box bg="$green" paddingHorizontal={100} paddingVertical={20}>
          <Text color="white">deskripsi</Text>
        </Box>
      </Center>
      {/* Content */}
        <Content />
      {/* Content End */}
    </View>
  )
}

export default deskripsi