import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ViewComponent from "./components/View";
import FlewContainer from "./components/FlexContainer";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
      <View style={{ flex: 1, backgroundColor: "teal" }}></View>
      <View style={{ flex: 1, backgroundColor: "orange" }}></View>
      <Text
        style={{
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        React
      </Text>
      <View style={{ flex: 1, backgroundColor: "blue" }}></View>
      <View style={{ flex: 1, backgroundColor: "green" }}></View>
    </View>
  );
}

// StyleSheet.create({}) create a style object
// Stylesheet is auto

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//     // border: "1px solid black", not native
//   },
//   text: {
//     fontSize: 30,
//     color: "white",
//   },
// });
