import { useNavigation } from '@react-navigation/native';
import { Center, Heading, Box, View, Text, ScrollView } from "@gluestack-ui/themed";
import {TouchableOpacity, Image } from 'react-native';
import { Header } from '../components';
import { Audio } from 'expo-av';
import { database } from '../src/config/FIREBASE';
import audio from '../assets/music1.mp3';
import React, { useState, useEffect, useCallback } from 'react';
import { getData } from '../src/utils';
const Soal5 = () => {
  const navigation = useNavigation();
  const [pertanyaan, pertanyaans] = useState(0);
  const [skor, skors] = useState(0);
  const [hasil, hasils] = useState(false);
  const [sound, setSound] = useState();
  const [questions, setQuestions] = useState({});
  const [userAnswer, setUserAnswer] = useState(null);
  const [profile, setProfile] = useState(null);
  

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const snapshot = await database.ref('soal8').once('value'); // Change 'questions' to 'soal1'
        const questionsData = snapshot.val();

        if (questionsData) {
          const filteredQuestions = Object.values(questionsData).filter((question) => question !== undefined);
          console.log('Fetched questions successfully:', filteredQuestions);
          setQuestions(filteredQuestions);
        } else {
          console.error('No questions found in the database.');
        }
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const getUserData = () => {
    getData("user").then((res) => {
      const data = res;
      if (data) {
        console.log("isi data", data);
        setProfile(data);
      } else {
        // navigation.replace('Login');
      }
    });
  };
  useEffect(() => {
    getUserData();
  }, [])

  useEffect(() => {
    const musik = async () => {
      const { sound } = await Audio.Sound.createAsync(audio, { isLooping: true });
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

  const handleAnswer = (selectedOptionIndex) => {
    if (userAnswer) {
      // User has already answered, do nothing
      return;
    }

    if (sound) {
      sound.playAsync();
    }

    const correctOptionIndex = parseInt(questions[pertanyaan]?.jawabanBenar);

    if (correctOptionIndex === selectedOptionIndex) {
      skors(skor + 1);
    }

    setUserAnswer(correctOptionIndex === selectedOptionIndex ? 'correct' : 'wrong');
  };

  const showNextQuestion = () => {
    setUserAnswer(null);
    if (pertanyaan < Object.keys(questions).length - 1) {
      pertanyaans(pertanyaan + 1);
    } else {
      hasils(true);

      const user = profile?.nama;
      const scoreData = {
        score: skor,
        soal: 'Ikhfa Haqiqi',
        users: user,
      };

      // Gunakan push() untuk menambahkan skor ke dalam tabel skor
      database.ref('score').push(scoreData);
    }
  };

  const resetQuiz = () => {
    pertanyaans(0);
    skors(0);
    hasils(false);
    setUserAnswer(null);
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

  const getColorForOption = useCallback(
    (optionIndex) => {
      const { jawabanBenar } = questions[pertanyaan] || {};

      if (userAnswer === 'correct' && optionIndex === parseInt(jawabanBenar)) {
        return 'green';
      } else if (userAnswer === 'wrong' && optionIndex === parseInt(jawabanBenar)) {
        return 'green'; // Correct answer is in teal when the user answers incorrectly
      } else if (userAnswer === 'correct' || userAnswer === 'wrong') {
        return optionIndex === parseInt(jawabanBenar) ? 'green' : 'red'; // User's correct answer is in green, and correct answer is in red
      } else {
        return '#0F766E'; // Default color
      }
    },
    [questions, pertanyaan, userAnswer]
  );

  return (
    <>
     <ScrollView>
      <Header withBack={true} title="quiz" />
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
          source={require('../assets/quizs.png')}
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
              {questions[pertanyaan]?.question}
            </Text>
            {Object.values(questions[pertanyaan]?.options || {}).map((option, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAnswer(index + 1)}  // Pass the option index (starting from 1)
              >
                <View
                  backgroundColor={getColorForOption(index + 1)}
                  padding={10}
                  marginVertical={5}
                  borderRadius={5}
                >
                  <Text
                    color={'#fff'}
                    fontSize={16}
                  >{option}</Text>
                </View>
              </TouchableOpacity>
            ))}
            {userAnswer && (
              <TouchableOpacity onPress={showNextQuestion}>
                <View
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
                  >Next Question</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        ) : (
          <View>
            <Text
              alignSelf={'center'}
              fontSize={24}
              justifyContent={'center'}
              fontWeight={'bold'}
              marginBottom={5}
              padding={5}
              marginTop={15}
            >Hasil Quiz</Text>
            <Text
              justifyContent={'center'}
              fontSize={18}
              marginBottom={5}
            >{`Skor Anda: ${Math.round((skor / Object.keys(questions).length) * 100)}`}</Text>
            <TouchableOpacity onPress={resetQuiz}>
              <View
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
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSoal1}>
              <View
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
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>
      </ScrollView>
    </>
  );
};

export default Soal5;
