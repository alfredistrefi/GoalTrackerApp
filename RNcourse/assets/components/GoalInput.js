import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button,Modal, } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText(''); // Clear the input after adding a goal
  };

  return (
    <Modal visible={props.visible} animationType="slide">
   
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style={styles.buttonContainer}>
      <View style={styles.buttons}>
      <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.buttons}>
      <Button title='Cancel' onPress={props.onCancel}/>
      </View>
     
    </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '91%',
    padding: 16,
  },
  buttonContainer:{
    flexDirection: 'row',
    marginTop: 16,
  },
  buttons:{
    width: 100,

    marginHorizontal: 8,
  }
});

export default GoalInput;
