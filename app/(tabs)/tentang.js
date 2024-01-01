import React, { useState, useEffect } from "react";
import { Box, Text, Image, VStack, ScrollView } from "@gluestack-ui/themed";
import { Button } from "../../components";
import { clearStorage, getData } from "../../src/utils";
import FIREBASE from "../../src/config/FIREBASE";
import { useNavigation, } from '@react-navigation/native';
import { Animated } from 'react-native';
import { database } from "../../src/config/FIREBASE";
import { TouchableOpacity } from "react-native-gesture-handler";
const Profile = () => {
  const navigation = useNavigation();
  const [profile, setProfile] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(1));
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

  const navigateToSkor = () => {
    navigation.navigate('skor');
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

  
  return (
    <ScrollView>
    <Box
      mt={"$5"}
      mx={"$5"}
      backgroundColor="$blueGray100"
      flex={1}
      marginTop={"$20"}
      flexDirection="column"
    >
      
        <VStack backgroundColor="$blueGray100" width={"$full"} mb={"$10"}>
          <Image
            source={require("../../assets/avatar.png")}
            size="xl"
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
          <TouchableOpacity onPress={navigateToSkor}>
        <Button
        title="Hasil Quizku"
          type="text"
          backgroundColor="$teal"
          padding={"$3"}
          marginTop="$10"
        />
        </TouchableOpacity>
         
        </Box>
        <TouchableOpacity>
        <Button
          type="text"
          backgroundColor="$red"
          title={profile ? "Logout" : "Login"}
          padding={"$3"}
          marginTop="$10"
          onPress={() => onSubmit(profile)}
        />
        </TouchableOpacity>
    </Box>
    </ScrollView>
  );
};

export default Profile;
