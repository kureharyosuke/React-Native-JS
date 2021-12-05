import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewComponent from "./components/View";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>React Native</Text>
      <StatusBar style="light" />
      {/* clock, wifi, battery by status bar  */}
      <ViewComponent />
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
    // border: "1px solid black", not native
  },
  text: {
    fontSize: 30,
    color: "white",
  },
});
