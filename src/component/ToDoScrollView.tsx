import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

interface Props {

}

function ToDoScrollView({ }: Props) {
  return (
    <ScrollView>
        todos.map(item => <ToDoListItem
          deleteToDo={() => deleteToDo(key)}
        />)
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    
});

export default ToDoInputBox;
