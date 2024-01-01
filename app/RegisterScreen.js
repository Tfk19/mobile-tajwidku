import React, { useState } from 'react';
import { Box, Alert, FormControl, Text, Modal, ModalBackdrop, AlertText, View, Image } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from '../components';
import { registerUser } from './auth/authFunction';
import { Redirect } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Register = () => {
  const navigation = useNavigation();

  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nohp, setNohp] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const toggleAlert = (message) => {
    setShowAlert(!showAlert);
    setAlertMessage(message);
  };

  const onRegister = async () => {
    if (nama && email && nohp && password) {
      const data = {
        nama: nama,
        email: email,
        nohp: nohp,
        status: 'user',
      };

      try {
        const user = await registerUser(data, password);
        navigation.replace('(tabs)', { screen: 'home' });
      } catch (error) {
        console.log('Error', error.message);
        toggleAlert(error.message);
      }
    } else {
      console.log('Error', 'Data tidak lengkap');
      toggleAlert('Data tidak lengkap');
    }
  };

  return (
    <Box flex={1} backgroundColor="$white" justifyContent="center">
      <View backgroundColor="$white" justifyContent="center" alignItems="center">
      <Image
        source={require("../assets/logoo.png")}
        alignItems="center"
        w="$40%"
        h="$50%"
        p={0}
        mt={-10}
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
        // elevation="$5"
        backgroundColor="$white"
        // borderRadius="$md"

        marginHorizontal="$6"
        p="$5"
        marginBottom="$20"
      >
        <View alignItems='center'>
        <Text size="3xl" color="$teal" fontWeight="bold">
          DAFTAR
        </Text>
        <Text size="sm" color="$black" my="$1">
          Silahkan Mengisi Form!
        </Text>
        </View>
        <FormControl>
          <Input label="Nama" value={nama} onChangeText={(nama) => setNama(nama)} height="$10" placeholder="Masukkan Nama" />
          <Input label="Email" value={email} onChangeText={(email) => setEmail(email)} height="$10" placeholder="Masukkan Email" />
          <Input
            label="No. Handphone"
            keyboardType="phone-pad"
            value={nohp}
            onChangeText={(nohp) => setNohp(nohp)}
            height="$10"
            placeholder="Masukkan No. Handphone"
          />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(password) => setPassword(password)}
            height="$10"
            placeholder="Masukkan Password"
          />
        </FormControl>
        <TouchableOpacity>
        <Box flexDirection="column" my="$5">
          <Button
            title="Register"
            backgroundColor="$teal"
            type="text"
            icon="submit"
            padding="$3"
            fontSize="$md"
            onPress={() => {
              onRegister();
            }}
          />
        </Box>
        </TouchableOpacity>
      </Box>

      {/* show Alert */}
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

export default Register;
