import { Center, Heading, Box, Text, ScrollView } from "@gluestack-ui/themed";
import { View, StyleSheet, Dimensions } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { Header } from "../components";

const Deskripsi = () => {
  const params = useLocalSearchParams();
  const [surat, setSurat] = useState({});

  const fetchData = () => {
    fetch(`https://equran.id/api/v2/surat/${params.id}`)
      .then((response) => response.json())
      .then((data) => {
        setSurat(data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData()
  }, [params.id]);

  if (!surat || !surat.ayat) {
    return (
      <Center>
        <View>
          <Text>Loading...</Text>
        </View>
      </Center>
    );
  }

  const Content = () => {
    return (
      <ScrollView>
        <Header withBack={true} top="$0" title={"Home"} />
        <Center>
          <Box bg="$#27847D" p="$2" mb="$3">
            <Text color="white">{surat.namaLatin}</Text>
          </Box>
          <Box bg="" p="$2" paddingHorizontal={10} w={350} mb="$3">
            {surat.ayat.map((verse) => (
              <Box key={verse.nomorAyat} mb="$1">
                 <Box bg="$teal" p="$2" paddingHorizontal={10} w={350} rounded={"$md"} >
                <Text fontSize={20} color="white"> Ayat ke- {(verse.nomorAyat)}</Text>
                </Box>
                <Text marginTop={10} bold fontSize={20}>{verse.teksArab}</Text>
                <Text>"{verse.teksIndonesia}"</Text>
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
        <Content style={styles.centeredText} />
      </Center>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default Deskripsi;
