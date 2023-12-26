import React, {useState} from 'react';
import { Text, View, TouchableOpacity, Keyboard, Image } from 'react-native';
import { Center, Heading, Box, ScrollView, Input, KeyboardAvoidingView, InputField, } from "@gluestack-ui/themed";
import { Link } from "expo-router";
import { Header } from "../components";
import Task from '../components/task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const Headers = () => {
    return (
      <View w="100%">
        <Link
          href={{
            pathname: "",
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

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

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
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
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
        <Input paddingHorizontal={15} paddingVertical={15} bg='#fff' borderRadius={60} borderColor='#C0C0C0' borderWidth={1} width={250} h={60} size='' variant='rounded'>
          <InputField placeholder='write a task' value={task} onChangeText={text => setTask(text)}></InputField>
        </Input>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <Box width="60px" height="60px" bg="#fff" rounded="$full" py="$5" px="$6" borderWidth={1} borderColor='#C0C0C0'>
            <Text>+</Text>
          </Box>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    </Center>
    </ScrollView>
  );
}
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});

