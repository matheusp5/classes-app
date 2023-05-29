import React from "react";
import Home from "./pages/Home";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Update from "./pages/Update";

const Stack = createStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Início" component={Home}/>
            <Stack.Screen name="Atualizar" component={Update} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

const s = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    marginTop: 20
  }
})