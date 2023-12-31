import React, { useState, useEffect } from "react";
import { Box, Text, Image, VStack, ScrollView } from "@gluestack-ui/themed";
import { Button } from "../../components";
import { clearStorage, getData } from "../../src/utils";
import FIREBASE from "../../src/config/FIREBASE";
import { useNavigation } from '@react-navigation/native';
import { database } from "../../src/config/FIREBASE";
const Profile = () => {
  const navigation = useNavigation();
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

  
 
  // useEffect(() => {
  //   getQuizUser()
  // }, [])
  // console.log(scoreUser)

  useEffect(() => {
    if (navigation) { // Check if navigation is defined before using it
      const unsubscribe = navigation.addListener("focus", () => {
        getUserData();
        // getQuizUser();
      });

      return () => {
        unsubscribe();
      };
    }
  }, [navigation]);



  const onSubmit = (profile) => {
    if (profile) {
      FIREBASE.auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          clearStorage();
          navigation.replace("LoginScreen");
        })
        .catch((error) => {
          // An error happened.
          alert(error);
        });
    } else {
      navigation.replace("LoginScreen");
    }
  };

  useEffect(() => {
    const fetchQuizUser = async () => {
      try {
        const snapshot = await database.ref('score').once('value');
        const scoreData = snapshot.val();
    
        if (scoreData) {
          const userDataArray = Object.entries(scoreData).reduce((accumulator, [scoreId, score]) => {
            if (score.users === profile?.nama) {
              // Jika nilai 'users' sama dengan 'Nafis', tambahkan data ke array
              accumulator.push({
                id: scoreId,
                ...score,
              });
            }
            return accumulator;
          }, []);
    
          if (userDataArray.length > 0) {
            // Ada data yang sesuai dengan 'Nafis'
            console.log('User data found:', userDataArray);
            setScoreUser(userDataArray);
          } else {
            console.log(`No user data found : ${profile?.nama}`)
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
  if (!scoreUser) {
    return (
      // <Center>
        <Text>
          <Text>Loading...</Text>
        </Text>
      // </Center>
    );
  }
  return (
    <Box
      mt={"$5"}
      mx={"$5"}
      backgroundColor="$blueGray100"
      flex={1}
      marginTop={"$20"}
      flexDirection="column"
    >
      <ScrollView>
        <VStack backgroundColor="$blueGray100" width={"$full"} mb={"$10"}>
          <Image
            source={require("../../assets/avatar.png")}
            size="2xl"
            borderRadius={"$full"}
            alignSelf="center"
            alt="Foto Profil"
          />
          <Text
            fontSize={"$xl"}
            alignSelf="center"
            marginTop={"$5"}
            fontWeight="$bold"
          >
            {profile?.nama}
          </Text>
        </VStack>
        <Box
          flexDirection="column"
          bgColor="$white"
          shadowColor="$black"
          shadowOffset={{ width: 0, height: 2 }}
          shadowOpacity={"$25"}
          shadowRadius={"$3.5"}
          justifyContent="space-evenly"
          p={"$5"}
          borderRadius={"$xl"}
        >
          <Text color="$black" fontWeight="$bold" fontSize={"$xl"}>
            Data Diri
          </Text>
          <Box mt={"$5"}>
            <Text color="$black" fontSize={"$sm"}>
              Email
            </Text>
            <Text color="$black" fontSize={"$xl"} mt={"$2"}>
              {profile?.email}
            </Text>
          </Box>
          <Box mt={"$5"}>
            <Text color="$black" fontSize={"$sm"}>
              Nomor Ponsel
            </Text>
            <Text color="$black" fontSize={"$xl"} mt={"$2"}>
              {profile?.nohp}
            </Text>
          </Box>
          <Box mt={"$5"}>
            <Text color="$black" fontSize={"$sm"}>
              Hasil Quiz Anda Selama Ini
            </Text>
            {scoreUser.map((item, index) => {
              return (
                    <Text key={index} color="$black" fontSize={"$xl"} mt={"$2"}>
                      <Text>
                        Berikut adalah hasil skor dari soal {item.soal} : {item.score}
                      </Text>
                    </Text>
                  )
            })}
          </Box>
        </Box>
        <Button
          type="text"
          title={profile ? "Logout" : "Login"}
          padding={"$3"}
          onPress={() => onSubmit(profile)}
        />
      </ScrollView>
    </Box>
  );
};

export default Profile;
