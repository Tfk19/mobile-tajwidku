import React, { useState } from "react";
import { Box, Alert, FormControl, Heading, Text, Modal, ModalBackdrop, AlertText } from "@gluestack-ui/themed";
import { Input, Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "./auth/authFunction"; // Replace with your actual auth function

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
        navigation.replace('(tabs)', { screen: 'home' });
      } else {
        toggleAlert("Please enter both email and password.");
      }
    } catch (error) {
      console.error("Firebase Error", error);
      toggleAlert(error.message || "Authentication failed");
    }
  };

  return (
    <Box flex={1} backgroundColor="$teal" justifyContent="center">
      <Box
        shadowColor="$black"
        shadowOffset={{ width: 0, height: 2 }}
        shadowOpacity="$25"
        shadowRadius="$3.5"
        elevation="$5"
        backgroundColor="$white"
        borderRadius="$md"
        marginTop="$10"
        marginHorizontal="$6"
        p="$5"
      >
        <Heading size="3xl" color="$black">
          Welcome
        </Heading>
        <Text size="sm" color="$black" my="$1">
          Sign in to continue!
        </Text>
        <FormControl>
          <Input label="Email" value={email} onChangeText={(text) => setEmail(text)} height="$10" />
          <Input
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            height="$10"
            secureTextEntry
          />
        </FormControl>
        <Box flexDirection="column" my="$5">
          <Button title="Login" type="text" padding="$3" onPress={login} />
          <Text size="sm" color="$black" mt="$4">
            Don't have an account?
          </Text>
          <Button
            title="Register"
            type="text"
            padding="$3"
            onPress={() => {
              navigation.navigate("RegisterScreen");
            }}
          />
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
