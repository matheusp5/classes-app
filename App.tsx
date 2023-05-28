import React from "react";
import Home from "./pages/Home";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return <View>
      <Home />
    </View>
}

const s = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 20
  }
})