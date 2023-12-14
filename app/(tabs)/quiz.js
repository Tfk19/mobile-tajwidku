import React, { useState } from 'react';
import {
  Box,
  Text,
} from "@gluestack-ui/themed";
import { View, TouchableOpacity, Animated, SafeAreaView, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

const quiz = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(1));

  const startQuiz = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const navigateToSoal1 = () => {
    navigation.navigate('Soal1');
    startQuiz();
  };
  const navigateToSoal2 = () => {
    navigation.navigate('Soal2');
    startQuiz();
  };
  const navigateToSoal3 = () => {
    navigation.navigate('Soal3');
    startQuiz();
  };
  const navigateToSoal4 = () => {
    navigation.navigate('Soal4');
    startQuiz();
  };
  const navigateToSoal5 = () => {
    navigation.navigate('Soal5');
    startQuiz();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <>
          <Header title="quiz" />
          <View>
            <Image
              w="$50"
              h="$50"
              source={require('../../assets/quizs.png')}
              resizeMode="contain"
              role="img"
              alignSelf="center"
            />
          </View>
          <View>
            <View p={"$4"}>
              <Text fontSize={"$2xl"}
                textAlign={"center"}
                marginTop={"$5"}
                fontWeight={"bold"}
                color={"$teal700"}
              >QUIZ TAJWIDKU</Text>
            </View>

            <TouchableOpacity onPress={navigateToSoal1}>
              <Box
                marginTop={10}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={40}
                alignItems={"center"}
              >
                <Text
                  fontSize={20}
                  textAlign={"center"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idzhar Halqi</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal2} >
              <Box
                marginTop={10}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={40}
                alignItems={"center"}
              >
                <Text
                  fontSize={20}
                  textAlign={"center"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idgham Bi Ghunnah</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal3}>
              <Box
                marginTop={10}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={40}
                alignItems={"center"}
              >
                <Text
                  fontSize={20}
                  textAlign={"center"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idgham Bila Ghunnah</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal4}>
              <Box
                marginTop={10}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={40}
                alignItems={"center"}
              >
                <Text
                  fontSize={20}
                  textAlign={"center"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}>Iqlab</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal5}>
              <Box
                marginTop={10}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={40}
                alignItems={"center"}
              >
                <Text
                  fontSize={20}
                  textAlign={"center"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Ikhfa Haqiqi </Text>
              </Box>
            </TouchableOpacity>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
export default quiz;  