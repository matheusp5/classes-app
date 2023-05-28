import { StyleSheet, Text, View } from "react-native"; 
import React, { useState, useEffect } from "react";
import Day from "./components/Day";
import Days from "./utils/Days";
import getClassesForWeek from "./functions/getClassesForWeek";
import Container from "./components/Container";

const s = StyleSheet.create({
  title: {
    fontSize: 25, 
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20
  }
})

export default function Home() {   
  const [classes, setClasses] = useState<string[][]>([]);
  useEffect(() => {
    getClassesForWeek().then(result => setClasses(result))
  },[]);

  return (
    <View>
      <Text style={s.title}>
        Aulas
      </Text>
      <Container>
        {classes.map((classes: string[], i: number) => <Day key={i} dayName={Days[i+1]} classes={classes}/>)}
      </Container>
    </View>
  )
}

