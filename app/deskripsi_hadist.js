import React, { useState, useEffect } from 'react';
import { Center, Heading, Box, Text, ScrollView } from "@gluestack-ui/themed";
import { Link, Pressable, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import Header from "../components/header";

const DeskripsiHadist = () => {
  const params = useLocalSearchParams();
  const [deskripsi, setDeskripsi] = useState([]);

  const fetchData = () => {
    fetch(`https://api.hadith.gading.dev/books/${params.id}?range=1-50`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.data && data.data.hadiths) {
          setDeskripsi(data.data.hadiths);
        } else {
          console.error("Invalid API response:", data);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const Content = () => {
    if (!deskripsi.length) {
      return <Text>Loading...</Text>;
    }

    return (
    <ScrollView>
      <Center>
        {/* Your existing code to render the content */}
        {/* Adjust as needed */}
        {deskripsi.map((item) => (
          <Box key={item.number}>
            <Box bg="$teal" marginTop={20} mx={20} p="$2" paddingHorizontal={10} w={350} rounded={"$md"} >
                <Text fontSize={20} color="white"> Ayat ke- {(item.number)}</Text>
                </Box>
            <Heading marginTop={10} mx={20}>{item.arab}</Heading>
            <Text marginTop={10} textAlign="justify" mx={20}>Artinya: {item.id}</Text>
            {/* Add other elements here */}
          </Box>
        ))}
      </Center>
      </ScrollView>
    );
  };

  return (
    <View>
      {/* Headers */}
      <Header withBack={true} />
      {/* Headers End */}
      <Center mt={20}>
        <Box bg="$#27847D" paddingHorizontal={100} paddingVertical={20}>
          <Text color="white">Hadist</Text>
        </Box>
      </Center>
      {/* Content */}
      <Content />
      {/* Content End */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default DeskripsiHadist;
