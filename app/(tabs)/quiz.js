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
  const navigateToSoal6 = () => {
    navigation.navigate('Soal6');
    startQuiz();
  };
  const navigateToSoal7 = () => {
    navigation.navigate('Soal7');
    startQuiz();
  };
  const navigateToSoal8 = () => {
    navigation.navigate('Soal8');
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

            <TouchableOpacity onPress={navigateToSoal1}>
              <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idzhar Halqi</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal2} >
            <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idgham Bi Ghunnah</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal3}>
            <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idgham Bila Ghunnah</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal4}>
            <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                  >Iqlab</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal5}>
            <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Ikhfa Haqiqi </Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal6}>
            <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idgham Mimi </Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal7}>
            <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Ikhfa Syafawi </Text>
              </Box>
              <TouchableOpacity onPress={navigateToSoal8}>
              <Box
                paddingTop={25}
                paddingBottom={25}
                marginTop={20}
                marginBottom={100}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={50}
                alignItems={"left"}
              >
                <Text
                  fontSize={20}
                  textAlign={"left"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >Idzhar Syafawi </Text>
              </Box>
            </TouchableOpacity>
            </TouchableOpacity>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
export default quiz;  