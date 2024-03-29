import React, {useState, useEffect} from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Center, Heading, Box, ScrollView, Input, KeyboardAvoidingView, InputField, } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Header } from "../components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Task from '../components/task';

const bacaan = () => {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const Headers = () => {
    return (
      <View w="100%">
        <Link
          href={{
            pathname: "bacaan",
          }}>
          <Box rounded="$xl" alignItems="center" w="$50" bg="teal" flex={1}>
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
    if (data === "") 
      return;
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
        <Heading color="$teal800" py="$4" >
          خيركم من تعلّم القران و علّمه
        </Heading>
        <Text color="$teal700" bottom="$2" px="$10" textAlign="center" sizes="6xl" >
          “Sebaik-baiknya diantara kamu adalah
          orang yang belajar Al-Qur’an dan
          Mengajarkannya”
        </Text>
    <View style= {{flex:1}}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={{paddingHorizontal:20}}>
        <View style={{marginTop:10}}>
          {/* This is where the tasks will go! */}
          {
            list.map((item, index) => {
              return (
                <Box key={item.title + index.toString()}>
                  <Task 
                  data={item}
                  index={index}
                  deletedIcon={true}
                  onItemPress={() => handleStatusChange(index)}
                  onChecked={() => handleStatusChange(index)}
                  onDeleted={() => handleDeleteTask(index)}/> 
                </Box>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task */}
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, zIndex: 999, alignItems: "center", justifyContent: 'space-around', flexDirection: 'row',width:"100%", marginBottom: "10" }}
      >
        <Box>
          <Input paddingHorizontal={15} paddingVertical={15} bg='#fff' borderRadius={60} borderColor='$teal' borderWidth={1} width={250} h={60} size='' variant='rounded'>
          <InputField placeholder='write a task' value={inputValue} onChangeText={(char) => setInputValue(char)}></InputField>
        </Input>
        </Box>
        <TouchableOpacity onPress={() => handleAddTask(inputValue)}>
          <Box width="60px" height="60px" bg="#fff" rounded="$full" py="$5" px="$6" borderWidth={1} borderColor='$teal'>
            <Text>+</Text>
          </Box>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    </Center>
    </ScrollView>
  );
};
export default bacaan;

