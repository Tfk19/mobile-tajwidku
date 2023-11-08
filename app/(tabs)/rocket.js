import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";


const rocket = ({ navigation }) => {
  const [fadeAnim, setFadeAnim] = useState(new Animated.Value(1));
  const startQuiz = () => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1900,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/Tajwidku.png")} /> */}
      <View style={styles.subContainer}>
        <Text style={styles.text}>Quiz Tajwidku</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Quiz");
          startQuiz();
        }}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Mulai !!!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItem: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
  },
  subContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItem: "center",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#0F766E",
  },
  btn: {
    backgroundColor: "#0F766E",
    paddingHorizontal: 5,
    paddingVertical: 15,
    position: "relative",
    borderRadius: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#ffffff",
    letterSpacing: 1.1,
  },
});
  

//this is will initiate a fade animation when user clicks on Let's begin button
//and navigate the user to QuizPage

  
export default rocket;