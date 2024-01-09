import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Center, Box, Text, Heading } from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';
import animationData from '../animasi.json';
import Header from '../components/header';

const DeskripsiHadist = () => {
  const params = useLocalSearchParams();
  const [deskripsi, setDeskripsi] = useState([]);
  const [loadingAnimation, setLoadingAnimation] = useState(true);
  const animationRef = useRef(null);

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
          console.error('Invalid API response:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoadingAnimation(false));
  };

  useEffect(() => {
    fetchData();
  }, [params.id]);

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  }, [animationRef.current]);

  const Content = () => {
    if (deskripsi.length === 0) {
      return (
        <Center>
          {/* Display the Lottie animation while loading */}
          
          <LottieView
            ref={animationRef}
            source={require("../animation.json")}
            autoPlay
            loop
          />
        </Center>
      );
    }

    return (
      <ScrollView>
        <Center>
          {/* Your existing code to render the content */}
          {deskripsi.map((item) => (
            <Box key={item.number}>
              <Box
                bg="$teal"
                marginTop={20}
                mx={20}
                p="$2"
                paddingHorizontal={10}
                w={350}
                rounded="$md"
              >
                <Text fontSize={20} color="white">
                  Hadist ke- {item.number}
                </Text>
              </Box>
              <Heading marginTop={10} mx={20}>
                {item.arab}
              </Heading>
              <Text marginTop={10} textAlign="justify" mx={20}>
                Artinya: {item.id}
              </Text>
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
