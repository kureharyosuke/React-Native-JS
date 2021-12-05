import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
//         border: "1px solid black",
      }}
    >
      <Text style={styles.text}>React Native</Text>
      <StatusBar style="light" />
      {/* clock, wifi, battery by status bar  */}
    </View>
  );
}

// StyleSheet.create({}) create a style object
// Stylesheet is auto

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
  },
  text: {
    fontSize: 30,
    color: "red",
  },
});
