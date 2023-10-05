import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const DeleteButton = ({ onPress }) => {
  return (
    
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}> X </Text>
    </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    padding: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default DeleteButton;
