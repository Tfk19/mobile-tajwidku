import React, { useState, useEffect } from "react";
import { Box, Alert, FormControl, Text, Modal, ModalBackdrop, AlertText, Image, View } from "@gluestack-ui/themed";
import { Input, Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "./auth/authFunction"; // Replace with your actual auth function
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const login = async () => {
    try {
      if (email && password) {
        // Call your authentication function
        const user = await loginUser(email, password);

        if (user) {
          await AsyncStorage.setItem("isLoggedIn", "true");
          navigation.replace('(tabs)', { screen: 'home' });
        } else {
          toggleAlert("Authentication failed");
        }
      } else {
        toggleAlert("Please enter both email and password.");
      }
    } catch (error) {
      console.error("Firebase Error", error);
      toggleAlert(error.message || "Authentication failed");
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

      if (isLoggedIn === "true") {
        navigation.replace('(tabs)', { screen: 'home' });
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  return (
    <Box flex={1} backgroundColor="$white" justifyContent="center">
      <View backgroundColor="$white" justifyContent="center" alignItems="center">
        <Image
          source={require("../assets/logoo.png")}
          alignItems="center"
          w="$50%"
          h="$60%"
          p={0}
          mt={-100}
          mb={-170}
          alt="Tajwidku Logo"
          resizeMode="contain"
          role="img"
        />
      </View>
      <Box
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity="$25"
        shadowRadius="$3.5"
        backgroundColor="$white"
        marginHorizontal="$6"
        p="$5"
      >
        <FormControl>
          <Input label="Email" 
          value={email} 
          onChangeText={(text) => setEmail(text)} 
          height="$10" 
          placeholder="Masukkan email anda"/>
          <Input
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            height="$10"
            secureTextEntry
            placeholder="Masukkan password anda"
          />
        </FormControl>
        <Box flexDirection="column" my="$5">
          <TouchableOpacity>
            <Button title="Login" type="text" padding="$3" onPress={login} backgroundColor="$teal"/>
          </TouchableOpacity>
          <Text size="sm" color="$black" mt="$4">
            Don't have an account?
          </Text>
          <TouchableOpacity>
            <Button
              title="Register"
              backgroundColor="$teal"
              type="text"
              color="teal"
              padding="$3"
              onPress={() => {
                navigation.replace("RegisterScreen");
              }}
            />
          </TouchableOpacity>
        </Box>
      </Box>

      {/* Show Alert */}
      {showAlert && (
        <Modal isOpen={showAlert} onClose={() => toggleAlert()}>
          <ModalBackdrop />
          <Alert mx="$4" action="error" variant="solid">
            <AlertText fontWeight="$bold">Error!</AlertText>
            <AlertText>{alertMessage}</AlertText>
          </Alert>
        </Modal>
      )}
    </Box>
  );
};

export default Login;
