import { Tabs } from "expo-router/tabs";
import { Text, View, ScrollView } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";

const noHead = { headerShown: false };

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconComponent;
          if (route.name === "surah") {
            iconComponent = (
              <View
                style={{
                  position: "absolute",
                  top: -20,
                  left: "50%",
                  marginLeft: -25,
                }}
              >
                <View
                  style={{
                    backgroundColor: "orange",
                    borderRadius: 50,
                    padding: 10,
                  }}
                >
                  <Ionicons name="book-sharp" size={30} color="white" />
                </View>
              </View>
            );
          } else {
            let iconName;
            switch (route.name) {
              case "home":
                iconName = "home-sharp";
                break;
              case "materi":
                iconName = "bookmark-sharp";
                break;
              case "quiz":
                iconName = "rocket-sharp";
                break;
              case "tentang":
                iconName = "medal-sharp";
                break;
              default:
                break;
            }
            iconComponent = (
              <Ionicons
                name={iconName}
                size={30}
                color={focused ? "orange" : "white"}
              />
            );
          }

          return iconComponent;
        },
        tabBarIconStyle: { marginTop: 5, paddingTop: 0 },
        tabBarStyle: {
          marginBottom: -20,
          marginLeft: 20,
          marginRight: 20,
          borderRadius: 20,
          paddingBottom: 20,
          position: "absolute",
          opacity: 50,
          backgroundColor: "teal",
          height: 80,
        },
        tabBarLabel: ({ children, focused }) => {
          return (
            <Text color={focused ? "orange" : "white"} fontSize="$sm">
              {children}
            </Text>
          );
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home", ...noHead }} />
      <Tabs.Screen name="materi" options={{ title: "Materi", ...noHead }} />
      <Tabs.Screen name="surah" options={{ title: "Al-Qur'an", ...noHead }} />
      <Tabs.Screen name="quiz" options={{ title: "Quiz", ...noHead }} />
      <Tabs.Screen name="tentang" options={{ title: "Profile", ...noHead }} />
    </Tabs>
  );
};

export default TabsLayout;
