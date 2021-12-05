import React from "react";
import { View } from "react-native";

export default function ViewComponent(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={{ width: 100, height: 100, backgroundColor: "tomato" }}
      ></View>
      <View style={{ width: 100, height: 100, backgroundColor: "teal" }}></View>
      <View
        style={{ width: 100, height: 100, backgroundColor: "orange" }}
      ></View>
      <View style={{ width: 100, height: 100, backgroundColor: "blue" }}></View>
      <View
        style={{ width: 100, height: 100, backgroundColor: "green" }}
      ></View>
    </View>
  );
}
