import React, { useState, useEffect } from 'react';
import { Center, Heading, Box, Text, ScrollView } from "@gluestack-ui/themed";
import { View, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import LottieView from 'lottie-react-native'
import { Header } from "../components";

const Ayat = () => {
  const params = useLocalSearchParams();
  const [surat, setSurat] = useState({});
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await fetch(`https://equran.id/api/v2/surat/${params.id}`);
      const data = await response.json();
      setSurat(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  useEffect(() => {
    console.log("Lottie ada disinii");
  }, [loading]);

  if (loading) {
    return (
      <Center flex={1} alignItems="center" justifyContent="center">
        <Box width="50%" aspectRatio={1} overflow="hidden" borderRadius={16}>
          <LottieView 
            source={require('../animation.json')}
            autoPlay
            loop
            resizeMode="cover"
          />
        </Box>
      </Center>
    );
  }
  
  const Content = () => {
    return (
      <ScrollView>
        <Header withBack={true} title={"Home"} />
        <Center>
          <Box bg="$#27847D" p="$2" mb="$3" borderRadius={10} padding={20} paddingHorizontal={50}>
            <Text color="white">{surat.namaLatin}</Text>
          </Box>
          <Box bg="" p="$2" paddingHorizontal={10} w={350} mb="$3">
            {surat.ayat.map((verse) => (
              <Box key={verse.nomorAyat} mb="$1">
                <Box bg="$teal" p="$2" paddingHorizontal={10} w={350} rounded={"$md"}>
                  <Text fontSize={20} color="white"> Ayat ke- {(verse.nomorAyat)}</Text>
                </Box>
                <Text textAlign="right" marginTop={10} bold fontSize={25} padding={10} lineHeight={30}>{verse.teksArab}</Text>
                <Text textAlign="justify">"{verse.teksIndonesia}"</Text>
              </Box>
            ))}
          </Box>
        </Center>
      </ScrollView>
    );
  };

  return (
    <View>
      <Center mt={20}>
        <Content  />
      </Center>
    </View>
  );
};

export default Ayat;
