import { Stack } from "expo-router";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";


const noHead = { headerShown: false };

const StackLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <Stack>
        <Stack.Screen name="(tabs)" options={noHead} />
        <Stack.Screen name="index" options={noHead} />
        <Stack.Screen name="Soal1" options={noHead} />
        <Stack.Screen name="jadwal" options={noHead} />
        <Stack.Screen name="doa" options={noHead} />
        <Stack.Screen name="bacaan" options={noHead} />
        <Stack.Screen name="hadist" options={noHead} />
        <Stack.Screen name="deskripsi" options={noHead} />
        <Stack.Screen name="deskripsi_hadist" options={noHead} />
        <Stack.Screen name="ayat" options={noHead} />
        <Stack.Screen name="Soal2" options={noHead} />
        <Stack.Screen name="Soal3" options={noHead} />
        <Stack.Screen name="Soal4" options={noHead} />
        <Stack.Screen name="Soal5" options={noHead} />
        {/* <Stack.Screen name="news-detail" options={noHead}/> */}
        {/* <StackNavigation initialRoute={AppNavigator.getRoute('tentang')} /> */}
      </Stack>
    </GluestackUIProvider>
  );
};
export default StackLayout;
