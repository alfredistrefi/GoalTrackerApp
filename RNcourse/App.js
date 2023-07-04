import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './assets/components/GoalItem';
import GoalInput from './assets/components/GoalInput';





export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);


  function startAddGoalHandler() {
    setModalVisible(true);
  }

  function endAddGoalHandler() {
    setModalVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal)=>goal.id !== id);
    });
  }
  return (
    <View style={styles.appContainer}>
    <Button title='Add New Goal'  color="black" onPress={startAddGoalHandler}/>
    {modalVisible &&  <GoalInput 
    visible={modalVisible} 
    onAddGoal={addGoalHandler}
    onCancel={endAddGoalHandler} />}
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={({ item }) => 
          <GoalItem goalText={item.text} 
          id={item.id}
          onDelete={deleteGoalHandler}/>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
