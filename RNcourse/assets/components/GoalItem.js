import React from 'react';
import { StyleSheet, Text, View, Pressable} from 'react-native';

const GoalItem = (props) => {

  return (
  
      <View style={styles.goalItem}>
      
      <Pressable
      android_ripple={{ color: '#dddddd' }}
      onPress={props.onDelete.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedItem}>
      <Text style={styles.goalText}>{props.Text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 20,
    padding: 8,
    backgroundColor: '#5e0acc',
   
  },
  pressedItem:{
    opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;