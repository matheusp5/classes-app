import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DayProps from "../models/DayProps";

const s = StyleSheet.create({
  day: {
    marginVertical: 5
  },
  dayName: {
    fontSize: 20,
    fontWeight: "bold",
  }
})

export default function Day({dayName, classes}: DayProps) {
  return (
    <View style={s.day}>
      <Text style={s.dayName}>{dayName}</Text>
      {classes.map((className: string, i: number) => <Text key={i}>{className}</Text>)}
    </View>
  )
}

