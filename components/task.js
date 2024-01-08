import React from 'react';
import { View} from 'react-native';
import {Box, Text, Icon, Checkbox, CheckboxIndicator, CheckboxIcon, CheckIcon, onChange ,Button, ButtonIcon} from '@gluestack-ui/themed'
import { FontAwesome5 } from "@expo/vector-icons";

const Task = (props) => {
  const { data, onChecked, onDeleted, deletedIcon, onItemPress } = props;
  return (
    <Box marginHorizontal={15} bg='teal' padding={15} borderRadius={10} flexDirection='row' alignItems='center' justifyContent='space-between' marginBottom={20}>
      <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap'}}>
        <Checkbox 
        value={data.title} 
        isChecked={data.isCompleted}
        size="lg" mr={15} 
        borderColor="transparent" 
        aria-label="This is a dummy checkbox" 
        onChange={onChecked}
        >
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
      </Checkbox>
      <Text 
        fontSize="$lg"
        color='#fff'
        strikeThrough={data.isCompleted}
        >
          {data.title}
      </Text>     
      </View>
      {deletedIcon && (
        <Button
        py={1}
        px={3}
         bg="transparent"
         onPress={onDeleted}
          >
          <ButtonIcon
            as={FontAwesome5}
            name="trash"
            size="md"
            color={data.isCompleted ? "#fff" : "$red"}
          />
        </Button>
          
      )}
    </Box>
  )
}

export default Task;
