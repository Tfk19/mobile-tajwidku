import { Center, Heading, Box, HStack, ScrollView,Text, Input, InputField } from "@gluestack-ui/themed";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { View,Image, TouchableOpacity, Pressable, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  Header  from "../components/header";
import { useRoute, useLocalSearchParams } from 'expo-router';
import React, { useState, useEffect } from 'react';

import {
    getAuth,
    updateProfile,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
  } from "@firebase/auth";


const login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const auth = getAuth();
    console.log(auth)
    // const user = auth.currentUser;
    
  
  const Content = () => {
    return (
      
      
        <Center>
            {/* <Text>
                Login
            </Text> */}
            {/* <Input
            py={3}
            placeholder="Username"
            type="username"
            onChangeText={(text) => setUsername(text)}
          />
            <Input
            py={3}
            placeholder="Password"
            type="password"
            onChangeText={(text) => setPassword(text)}
          /> */}
          <Input
          variant="outline"
          size="md"
          placeholder="Username"
          type="username"
          onChangeText={(text) => setUsername(text)}
        >
          <InputField placeholder="Enter username here" />
        </Input>
          <Input
          variant="outline"
          size="md"
          placeholder="Password"
          type="password"
          onChangeText={(text) => setPassword(text)}
        >
          <InputField placeholder="Enter password here" />
        </Input>
        </Center>
    )
  }

  return (
    <View >
      {/* Headers */}
      <Header withBack={true} />
      {/* Headers End */}
      <Center mt={20}>
        <Box bg="$#27847D" paddingHorizontal={100} paddingVertical={20}>
          <Text color="white">Login</Text>
        </Box>
      </Center>
      {/* Content */}
        <Content />
      {/* Content End */}
    </View>
  )
}


export default login;