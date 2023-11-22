import { useNavigation } from '@react-navigation/native';
import { Center, Heading, Box, View, Text } from "@gluestack-ui/themed";
import { Header } from "../components";
import React, { useState, useEffect } from "react";
import questions from '../soal3';
import { Audio } from 'expo-av';
import audio from '../assets/music1.mp3';
// import rocket from "./(tabs)/rocket";
import {
  // View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Animated,
} from "react-native";


const Soal3 = () => {
  const navigation = useNavigation();
  const [pertanyaan, pertanyaans] = useState(0);
  const [skor, skors] = useState(0);
  const [hasil, hasils] = useState(false);
  const [sound, setSound] = useState();
  // const teal700 = "#0F766E";

  useEffect(() => {
    const musik = async () => {
      const { sound } = await Audio.Sound.createAsync(
        audio,
        { isLooping: true }
      );
      setSound(sound);
      await sound.playAsync();
    };

    musik();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const handleAnswer = (selectedOption) => {
    if (sound) {
      sound.playAsync();
    }
    if (selectedOption === questions[pertanyaan].correctAnswer) {
      skors(skor + 1);
    }

    if (pertanyaan < questions.length - 1) {
      pertanyaans(pertanyaan + 1);

    } else {
      hasils(true);
    }

  };

  const resetQuiz = () => {
    pertanyaans(0);
    skors(0);
    hasils(false);
    if (sound) {
      sound.stopAsync();
    }
  };


  const navigateToSoal1 = () => {
    navigation.navigate('quiz');
    if (sound) {
      sound.stopAsync();
    }
  };

  return (
    <>
      <Header title="quiz" />
      <View
        flex={1}
        justifyContent={'top'}
        alignItems={'center'}
        paddingHorizontal={20}
      >
        <Image
          flex={1}
          w={1}
          h={1}
          source={require('../assets/iconquiz.png')}
          role="img"
          alignSelf="center"
          alt='img'
          resizeMode="contain"
        />
      </View>
      <View
        flex={1}
        justifyContent={'top'}
        alignItems={'center'}
        paddingHorizontal={20}
      >
        {!hasil ? (
          <View>
            <Text
              alignSelf={"center"}
              fontSize={18}
              fontWeight={'bold'}
              marginBottom={20}
            >
              {questions[pertanyaan].question}
            </Text>
            {questions[pertanyaan].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswer(option)}
              >
                <Box
                  backgroundColor={'#0F766E'}
                  padding={10}
                  marginVertical={5}
                  borderRadius={5}
                >
                  <Text
                    color={'#fff'}
                    fontSize={16}
                  >{option}</Text>
                </Box>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View>
            <Text
              alignSelf={'center'}
              fontSize={24}
              justifyContent={'center'}
              fontWeight={'bold'}
              marginBottom={5}
            >Hasil Quiz</Text>
            <Text
              justifyContent={'center'}
              fontSize={18}
              marginBottom={5}
            >{`Skor Anda: ${skor}/${questions.length}`}</Text>
            <TouchableOpacity onPress={resetQuiz}>
              <Box
                marginTop={10}
                backgroundColor={'#0F766E'}
                paddingTop={10}
                paddingBottom={10}
                borderRadius={5}
              >
                <Text
                  justifyContent={'center'}
                  alignItems={'center'}
                  textAlign={'center'}
                  marginTop={0}
                  color={'#fff'}
                  fontSize={16}
                >Ulangi Quiz</Text>
              </Box>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal1}>
              <Box
                marginTop={10}
                backgroundColor={'#0F766E'}
                paddingTop={10}
                paddingBottom={10}
                borderRadius={5}
              >
                <Text
                  justifyContent={'center'}
                  alignItems={'center'}
                  textAlign={'center'}
                  marginTop={0}
                  color={'#fff'}
                  fontSize={16}
                >Ke Menu Home</Text>
              </Box>
            </TouchableOpacity>
          </View>
        )}
      </View >
    </>
  );

};

export default Soal3;  