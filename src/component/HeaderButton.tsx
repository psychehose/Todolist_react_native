import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  onPress: () => void;
}

function HeaderButton({ text, onPress }: Props) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 38,
    fontWeight: "600",
  },
});

export default HeaderButton;
