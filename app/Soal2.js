import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Center, Box, Text } from '@gluestack-ui/themed';
import { Header } from '../components';
import { Audio } from 'expo-av';
import { database } from '../src/config/FIREBASE';
import audio from '../assets/music1.mp3';
import { getData } from '../src/utils';


const soal2 = () => {
  const navigation = useNavigation();
  const [pertanyaan, pertanyaans] = useState(0);
  const [skor, skors] = useState(0);
  const [hasil, hasils] = useState(false);
  const [sound, setSound] = useState();
  const [questions, setQuestions] = useState({});
  const [userAnswer, setUserAnswer] = useState(null);
  const [testScore, setTestScore] = useState("");
  const [profile, setProfile] = useState(null);
  const [sisaWaktu, setsisaWaktu] = useState(10);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const snapshot = await database.ref('soal2').once('value'); // Change 'questions' to 'soal2'
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

  useEffect(() => {
    let timer;
    if (!hasil && sisaWaktu > 0) {
      timer = setTimeout(() => {
        setsisaWaktu((prevsisaWaktu) => prevsisaWaktu - 1);
      }, 1000);
    } else if (!hasil && sisaWaktu === 0) {
      // Time is up, handle it accordingly (e.g., mark the question as unanswered)
      setUserAnswer('unanswered');
      showNextQuestion();
    }

    return () => clearTimeout(timer);
  }, [sisaWaktu, hasil]);

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
  console.log(profile?.nama)

  const showNextQuestion = () => {
    setUserAnswer(null);
    setsisaWaktu(10);
    if (pertanyaan < Object.keys(questions).length - 1) {
      pertanyaans(pertanyaan + 1);
    } else {

      hasils(true);

      const user = profile?.nama;
      const scoreData = {
        score: skor,
        soal: 'Idgham Bi Ghunnah',
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
    setsisaWaktu(10);
    if (sound) {
      sound.stopAsync();
    }
  };

  const navigateTosoal2 = () => {
    navigation.navigate('quiz');
    if (sound) {
      sound.stopAsync();
    }
  };

  const getColorForOption = (optionIndex) => {
    const { jawabanBenar } = questions[pertanyaan] || {};

    if (userAnswer === 'correct' && optionIndex === parseInt(jawabanBenar)) {
      return 'teal';
    } else if (userAnswer === 'wrong' && optionIndex === parseInt(jawabanBenar)) {
      return 'teal'; // Correct answer is in teal when the user answers incorrectly
    } else if (userAnswer === 'correct' || userAnswer === 'wrong') {
      return optionIndex === parseInt(jawabanBenar) ? 'teal' : 'red'; // User's correct answer is in teal, and correct answer is in red
    } else {
      return '#0F766E'; // Default color
    }
  };

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
                marginTop={20}
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
  
              {/* Display the timer only if the user hasn't answered */}
              {!userAnswer && (
                <Text
                  alignSelf={"center"}
                  fontSize={18}
                  marginTop={20}
                >
                  {`Waktu Tersisa: ${sisaWaktu} Detik`}
                </Text>
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
              <TouchableOpacity onPress={navigateTosoal2}>
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

export default soal2;
