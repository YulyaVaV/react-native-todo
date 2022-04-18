import React, {useState} from "react";
import { StyleSheet, View, Button, TextInput, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('')
    } else {
      Alert.alert(`Todo name can't be empty`)
    }
  }

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder='Enter todo name'
        autoCorrect={false}
      />
      <Button title="ADD" onPress={pressHandler}/>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 15,
  },
  input: {
    width: '80%',
    padding: 10,
    paddingLeft: 0,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  }
});
