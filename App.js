import { useState } from 'react';
import { StyleSheet, View,Text, FlatList, Pressable } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import PetsIcon from '@mui/icons-material/PetsOutlined';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, { text: enteredGoalText, key: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(goalKey) {
    setCourseGoals((currentCourseGoals) =>
      currentCourseGoals.filter((goal) => goal.key !== goalKey)
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
      <Pressable> <PetsIcon style={styles.pet}/> </Pressable>
     

          <Text style={styles.appTitle}><PetsIcon/> Pet Care <PetsIcon/></Text>
      </View>      

      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalListContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item.text}
              onDelete={() => deleteGoalHandler(itemData.item.key)}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pet:{
    paddingLeft: 330,
    fontSize: 40,
    color: "#FF6108",
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
    paddingHorizontal: 16,
    backgroundColor: '#FAF0E6',
  },
  
  goalListContainer: {
    marginTop: 5,
    flex: 1, 
    maxHeight: 200, 
  },

  titleContainer: {
   alignItems: "center",
   marginBottom: 20,
  },

  appTitle: {
    fontSize: 40,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#e9967a",
  },

});