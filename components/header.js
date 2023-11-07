import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

const Header = ({ title, withBack = false, withClose = false }) => {
  const teal700 = "#0F766E";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={teal700} />
      <Box bg="$teal700" p="$1" mt="$0"></Box>
      <Box ml="$4" p="$4">
         <HStack justifyContent="space-between" alignItems="left">
          <HStack alignItems="left">
           
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/Tajwidku.png")}
                  mr="-$80"
                  w="$100%"
                  h="$12"
                  alt="Tajwidku Logo"
                  resizeMode="contain"
                  role="img"
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"$3"}>
                  <Ionicons name="arrow-back-outline" size={32} color={teal700} />
                </Box>
              </TouchableOpacity>
            )}
          </HStack>
          <HStack mt="$1" space={"2xl"}>
          <Ionicons name="search" size={32} color={teal700} />
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};


export default Header;
