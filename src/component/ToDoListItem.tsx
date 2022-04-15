import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface Props {
  key: string;
  text: string;
  deleteTodo: () => void;
}

function ToDoListItem({ key, text, deleteToDo }: Prop) {
  return (
    <View style={styles.toDo}>
      <Text style={styles.toDoText}>
          {text}
      </Text>
      <TouchableOpacity onPress={deleteToDo}>
        <Fontisto name="trash" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles: StyleSheet.create {

}