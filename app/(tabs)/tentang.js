import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { View, TouchableOpacity, StyleSheet, Animated, SafeAreaView, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';

const tentang = () => {
  const navigation = useNavigation();
  const [fadeAnim] = useState(new Animated.Value(1));

  const navigateToMore = () => {
    navigation.navigate('');
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <>
          <Header title="quiz" />
          <View>
          <Image
              w="$50"
              h="$50"
              source={require('../../assets/Frame1.png')}
              resizeMode="contain"
              role="img"
              alignSelf="center"
            />
          </View>
          <View p={"$4"}>
              <Text fontSize={"$2xl"}
                textAlign={"center"}
                marginTop={"$5"}
                fontWeight={"bold"}
                px={10}
                color={"$teal700"}
              >TENTANG TAJWIDKU</Text>
            </View>
          <View>
            <Text color="$green700" bottom="$2" marginTop={10} px="$10" textAlign="justify" sizes="6xl">
              Tajwidku merupakan aplikasi mobile yang menyediakan program pembelajaran untuk digital learning 
              tentang Tajwid. Dalam aplikasi Tajwidku menyediakan Materi, Surat-Surat, Quiz, dan Tentang Tajwidku.               
            </Text>
            <TouchableOpacity onPress={navigateToMore}>
              <Box
                marginTop={10}
                backgroundColor={"#0F766E"}
                paddingHorizontal={20}
                paddingVertical={5}
                position={"relative"}
                borderRadius={10}
                marginHorizontal={40}
                alignItems={"center"}
              >
                <Text
                  marginTop={5}
                  marginBottom={5}
                  fontSize={20}
                  textAlign={"center"}
                  color={"#ffffff"}
                  letterSpacing={1.1}
                  fontWeight={"bold"}
                >READ MORE</Text>
              </Box>
            </TouchableOpacity>
          </View>


        
        </>
      </ScrollView>
    </SafeAreaView>
  );
};
export default tentang;  