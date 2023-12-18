import React, { useState, useEffect } from "react";
import { Center, Heading, Box, HStack, ScrollView, Text, Input, Icon, IconButton, Toast, Spinner } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { View, Image} from "react-native";
import { Header } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TaskList } from "../components";
import { Feather } from "@expo/vector-icons";

const Bacaan = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const toastID = "toast-add-task";

  const Headers = () => {
    return (
      <View w="100%">
        <Link
          href={{
            pathname: "/doa",
          }}>
          <Box rounded="$xl" alignItems="center" w="$50" bg="green" flex={1}>
            <Box position="relative" alignItems="center">
              <Image
                resizeMode="contain"
                role="img"
                source={require('../assets/bacaans.png')}
              />
              <Heading
                position="absolute"
                textAlign="center"
                color="$white"
              >
              </Heading>
            </Box>
          </Box>
          </Link>
      </View>
    )
  }

  const handleAddTask = (data) => {
    if (data === "") {
      if (!Toast.isActive(toastID)) {
        Toast.show({
          id: toastID,
          title: "Masukan nama task",
        });
      }
      return;
    }

    setList((prevList) => [...prevList, { title: data, isCompleted: false }]);
    setInputValue("");

    try {
      AsyncStorage.setItem(
        "@task-list",
        JSON.stringify([...list, { title: data, isCompleted: false }])
      );
    } catch (e) {
      console.log("Error add task: in task-all.js");
      console.error(e.message);
    }
  };

  const handleDeleteTask = (index) => {
    const deletedList = list.filter((_, listIndex) => listIndex !== index);
    setList(deletedList);

    try {
      AsyncStorage.setItem("@task-list", JSON.stringify(deletedList));
    } catch (e) {
      console.log("Error delete task: in task-all.js");
      console.error(e.message);
    }
  };

  const handleStatusChange = (index) => {
    setList((prevList) => {
      const newList = [...prevList];
      newList[index].isCompleted = !newList[index].isCompleted;
      return newList;
    });

    try {
      AsyncStorage.setItem("@task-list", JSON.stringify(list));
    } catch (e) {
      console.log("Error update status task: in task-all.js");
      console.error(e.message);
    }
  };

  const getTaskList = async () => {
    try {
      const value = await AsyncStorage.getItem("@task-list");
      if (value !== null) {
        console.log(value);
        setList(JSON.parse(value));
      } else {
        console.log("No Tasks");
      }
    } catch (e) {
      console.log("Error get task: in task-all.js");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <ScrollView>
      <Header withBack={true} top="$0" title={"Home"} />
      <Center>
        <View>
          <Headers />
        </View>
        <Heading color="$green800" py="$4" >
          خيركم من تعلّم القران و علّمه
        </Heading>
        <Text color="$green700" bottom="$2" px="$10" textAlign="center" sizes="6xl" >
          “Sebaik-baiknya diantara kamu adalah
          orang yang belajar Al-Qur’an dan
          Mengajarkannya”
        </Text>
        <Box flex={1}>
      <Box mt="15px" mx="15px" mb="7.5px">
        <HStack space="15px">
          <Input
            size="lg"
            flex={6}
            onChangeText={(char) => setInputValue(char)}
            value={inputValue}
            borderWidth={1}
            borderColor="primary.600"
            placeholder="Add Task"
          />
          <IconButton
            flex={1}
            borderRadius="sm"
            variant="solid"
            icon={
              <Icon as={Feather} name="plus" size="lg" color="warmGray.50" />
            }
            onPress={() => {
              handleAddTask(inputValue);
            }}
          />
        </HStack>
      </Box>
      {isLoading ? (
        <Center flex={1}>
          <Spinner size="lg" />
        </Center>
      ) : (
        <ScrollView>
          <Box mb="15px" mx="15px">
            {list.map((item, index) => (
              <Box key={item.title + index.toString()}>
                <TaskList
                  data={item}
                  index={index}
                  deletedIcon={true}
                  onItemPress={() => handleStatusChange(index)}
                  onChecked={() => handleStatusChange(index)}
                  onDeleted={() => handleDeleteTask(index)}
                />
              </Box>
            ))}
          </Box>
        </ScrollView>
      )}
    </Box>
      </Center>
    </ScrollView>
  );
};

export default Bacaan;
