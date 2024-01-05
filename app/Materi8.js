import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text,Button, ButtonText } from '@gluestack-ui/themed';
import {TouchableOpacity, Image } from 'react-native';
import { Header } from '../components';
import { database } from '../src/config/FIREBASE';
import { useNavigation } from '@react-navigation/native';

const Materi1 = () => {
  const [materi1Data, setMateri1Data] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await database.ref('materi2/3').once('value');
        const data = snapshot.val();
        setMateri1Data(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ScrollView>
        <Header withBack={true} title="quiz" />
        <View flex={1} justifyContent={'top'} alignItems={'center'} paddingHorizontal={20}>
          <Image
            flex={1}
            w={1}
            h={1}
            source={require('../assets/materis.png')}
            role="img"
            alignSelf="center"
            alt='img'
            resizeMode="contain"
          />
          <View flex={1} justifyContent={'c'} alignItems={'center'} paddingHorizontal={20}>
            {materi1Data && (
              <>
                <Text paddingTop={20} marginTop={20} fontSize={30} color='teal' bold italic>{materi1Data.materi}</Text>
                <Text marginTop={5}>{materi1Data.pengertian}</Text>
                <Text marginTop={20}>{materi1Data.contoh}</Text>
                <Button backgroundColor="$teal" borderRadius={"$full"} my={200} onPress={() => {navigation.navigate('web', { link: materi1Data.link }) }}>
                <ButtonText>Read More</ButtonText>
              </Button>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Materi1;
