import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DeleteButton from './DeleteButton';

const GoalItem = ({ text, onDelete }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textStyle}>{text}</Text>
      <DeleteButton onPress={onDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#FFE1BC',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 5,
  },

  textStyle: {
    fontSize: 20,
  },
});

export default GoalItem;