import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Center, Box, Text, Heading } from '@gluestack-ui/themed';
import LottieView from 'lottie-react-native';
import Header from '../components/header';

const DeskripsiHadist = () => {
  const params = useLocalSearchParams();
  const [deskripsi, setDeskripsi] = useState([]);
  const [loading, setLoading] = useState(true);
  const animationRef = useRef(null);

  const fetchData = () => {
    setLoading(true); // Set loading to true before making the API call
  
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
      .finally(() => setLoading(false)); // Set loading to false after the API call is complete
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
    console.log("Content component rendered");

    if (loading) {
      return (
        <Center flex={1}>
          <Box
            mt="50%"
            width="70%"
            aspectRatio={1}
            overflow="hidden"
            borderRadius={16}
            alignItems="center"
            justifyContent="center"
            alignSelf="center"  // Add this line
          >
            <LottieView 
              // ref={animationRef}
              source={require('../animation.json')}
              autoPlay
              loop
              resizeMode="cover"
            />
          </Box>
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
                mx={50}
                p="$2"
                paddingHorizontal={10}
                w={350}
                rounded="$md"
              >
                <Text fontSize={20} color="white">
                  Hadist ke- {item.number}
                </Text>
              </Box>
              <Heading marginTop={10} mx={50}>
                {item.arab}
              </Heading>
              <Text marginTop={10} textAlign="justify" mx={50}>
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
      {/* Lottie Animation */}
      <View>

      </View>
      {/* Content */}
      <Content />
      {/* Content End */}
    </View>
  );
};

export default DeskripsiHadist;
