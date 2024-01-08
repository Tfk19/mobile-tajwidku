import React, { useState, useEffect } from 'react';
import { Box, Text } from "@gluestack-ui/themed";
import { clearStorage, getData } from "../src/utils";
import { View, TouchableOpacity, Animated, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { database } from "../src/config/FIREBASE";

const skor = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(1));
  const [profile, setProfile] = useState(null);
  const [scoreUser, setScoreUser] = useState(null);

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
    if (navigation) {
      const unsubscribe = navigation.addListener("focus", () => {
        getUserData();
      });

      return () => {
        unsubscribe();
      };
    }
  }, [navigation]);

  useEffect(() => {
    const fetchQuizUser = async () => {
      try {
        const snapshot = await database.ref('score').once('value');
        const scoreData = snapshot.val();

        if (scoreData) {
          const userDataArray = Object.entries(scoreData).reduce((accumulator, [scoreId, score]) => {
            if (score.users === profile?.nama) {
              accumulator.push({
                id: scoreId,
                ...score,
              });
            }
            return accumulator;
          }, []);

          if (userDataArray.length > 0) {
            setScoreUser(userDataArray);
          } else {
            console.log(`No user data found: ${profile?.nama}`);
          }
        } else {
          console.error('No data found in the "score" node.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchQuizUser();
  }, [profile])

  console.log(`Berikut adalah hasil user ${JSON.stringify(scoreUser)}`)
  
  return (
    <SafeAreaView>
      <ScrollView>
        <>
          <Header withBack={true} title="quiz" />
          <View>
            <Image
              w="$50"
              h="$50"
              source={require('../assets/hasilquiz.png')}
              resizeMode="contain"
              role="img"
              alignSelf="center"
            />
          </View>
          <View>
            <Box mt={10} mx={50} backgroundColor='teal' borderRadius={"$xl"}>
              <View p={"$4"}>
                <Text fontSize={"$xl"}
                  textAlign={"left"}
                  padding={5}
                  marginTop={5}
                  marginLeft={5}
                  fontWeight={"bold"}
                  color={"white"}
                >Hasil Quiz Anda</Text>
              </View>
            </Box>
          </View>
          <Box mx={50}>
            {scoreUser && scoreUser.length > 0 ? (
              scoreUser.map((item, index) => {
                const percentage = Math.round((item.score / 3) * 100);
                return (
                  <Text key={index} color="$black" fontSize={"$xl"} mt={"$2"}>
                    <Text>
                      Berikut adalah hasil skor dari soal {item.soal} : <Text color='teal' bold>{percentage}</Text>
                    </Text>
                  </Text>
                );
              })
            ) : (
              <Text color="$black" fontSize={"$xl"} mt={"$2"}>
                Anda belum mengerjakan quiz.
              </Text>
            )}
          </Box>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default skor;
