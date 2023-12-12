import { Tabs } from "expo-router/tabs";
import { Text } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "home":
              iconName = "home-sharp";
              break;
            case "surah":
              iconName = "book-sharp";
              break;
              case "quiz":
                iconName = "rocket-sharp";
                break;
            case "tentang":
              iconName = "medal-sharp";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={36}
              color={focused ? "teal" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 10, paddingBottom:0 },
        tabBarStyle: {
          height: 70,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "$teal" : color} fontSize="$sm">
              {children}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "", ...noHead }} />
      <Tabs.Screen name="for-you" options={{ title: "", ...noHead }} /> 
      <Tabs.Screen name="quiz" options={{ title: "", ...noHead }} /> 
      <Tabs.Screen name="tentang" options={{ title: "", ...noHead }} />

    </Tabs>
  );
};

export default TabsLayout;
