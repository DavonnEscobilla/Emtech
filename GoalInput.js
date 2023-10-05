import { useState } from 'react';
import {StyleSheet, View, Button, TextInput, Pressable, Text} from 'react-native';
import PetsIcon from '@mui/icons-material/Pets';

function GoalInput(props) {
const [enteredGoalText, setEnteredText] = useState("");

    function goalInputHandler(enteredText)
    {
        setEnteredText(enteredText);
    };


    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredText("");
    };

    return(
      <View style={styles.inputContainer}>
        <TextInput placeholder='Your Course Goal' 
        style={styles.textInput} 
        onChangeText={goalInputHandler} 
        value={enteredGoalText}
        />
        <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'red' : '#FF6108',
          },
          styles.button,
        ]}
        onPress={addGoalHandler}>
        <Text style={styles.buttonText}>Button</Text>
      </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    borderColor: "#738678",
    paddingBottom: 8,
    borderBottomWidth: 8,
 },
 
  textInput: {
    borderWidth: 4,
    borderColor: '#542a18',
    width: '70%',
    marginRight: 8,
    padding: 13,
    color: "#67074e",
    borderRadius: 10,
  },

  button: {
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },

  });

  export default GoalInput;
