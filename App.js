import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, Alert, Modal } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import PetsIcon from '@mui/icons-material/Pets';
import PersonIcon from '@mui/icons-material/Person';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);


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
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Welcome to our application</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}> Hide </Text>
            </Pressable>
          </View>
        </View>
      </Modal>



      <Pressable
        style={[styles.button2]}
        onPress={() => setModalVisible(true)}>
        <PersonIcon style={styles.textStyle2}></PersonIcon>
      </Pressable>
      
      <View style={styles.titleContainer}>
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

//APP STYLES
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



// MODAL STYLES
centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  button2:{
    borderRadius: 8,
    padding: 6,
    height: 50,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: 'red',
  },
  buttonClose: {
    backgroundColor: 'green',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  textStyle2: {
    color: 'green',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 600,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});