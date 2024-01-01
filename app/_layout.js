import { Stack, useNavigation } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { Router } from 'expo-router';



const noHead = { headerShown: false };

const StackLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={noHead} />
        <Stack.Screen name="index" options={noHead} />
        {/* <Stack.Screen name="login" options={noHead} /> */}
        <Stack.Screen name="Soal1" options={noHead} />
        <Stack.Screen name="Materi1" options={noHead} />
        <Stack.Screen name="Materi2" options={noHead} />
        <Stack.Screen name="Materi3" options={noHead} />
        <Stack.Screen name="Materi4" options={noHead} />
        <Stack.Screen name="Materi5" options={noHead} />
        <Stack.Screen name="Materi6" options={noHead} />
        <Stack.Screen name="Materi7" options={noHead} />
        <Stack.Screen name="Materi8" options={noHead} />
        <Stack.Screen name="jadwal" options={noHead} />
        <Stack.Screen name="doa" options={noHead} />
        <Stack.Screen name="bacaan" options={noHead} />
        <Stack.Screen name="hadist" options={noHead} />
        <Stack.Screen name="skor" options={noHead} />
        <Stack.Screen name="deskripsi" options={noHead} />
        <Stack.Screen name="deskripsi_hadist" options={noHead} />
        <Stack.Screen name="ayat" options={noHead} />
        <Stack.Screen name="Soal2" options={noHead} />
        <Stack.Screen name="Soal3" options={noHead} />
        <Stack.Screen name="Soal4" options={noHead} />
        <Stack.Screen name="Soal5" options={noHead} />
        <Stack.Screen name="Soal6" options={noHead} />
        <Stack.Screen name="Soal7" options={noHead} />
        <Stack.Screen name="Soal8" options={noHead} />
        <Stack.Screen name="LoginScreen" options={noHead} />
        <Stack.Screen name="RegisterScreen" options={noHead} />
        {/* <Stack.Screen name="news-detail" options={noHead}/> */}
        {/* <StackNavigation initialRoute={AppNavigator.getRoute('tentang')} /> */}
      </Stack>
    </GluestackUIProvider>
  );
};
export default StackLayout;
