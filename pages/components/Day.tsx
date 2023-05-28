import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Day({day, classes}: any) {
  return <View>
    <Text style={s.day}>{day}</Text>
    {classes.map((e: any, i: number) => {
      return <Text key={i}>{e}</Text>
    })}
  </View>
}

const s = StyleSheet.create({
  day: {
    fontSize: 20
  }
})