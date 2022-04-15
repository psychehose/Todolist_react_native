import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

interface Props {
  text: string;
  working: boolean;
  onChangeText: () => void;
  addTodo: () => string;
}

function ToDoInputBox({ text, working, onChangeText, addTodo }: Props) {
  return (
    <View>
      <TextInput
        onSubmitEditing={addTodo}
        value={text}
        onChangeText={onChangeText}
        returnKeyType="done"
        placeholder={working ? "Add to do" : "Where do you want to go?"}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
});

export default ToDoInputBox;
