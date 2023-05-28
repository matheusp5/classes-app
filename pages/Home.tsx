import { Text, View } from "react-native"; 
import React, { useState, useEffect } from "react";
import axios from "axios"
import Day from "./components/Day";
import Days from "./Days";

export default function Home() {   
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios("http://192.168.1.19:3030/day").then(({data}) => {
      setClasses(data.content)
    })
  },[]);

  return <View>
    <Text style={{fontSize: 25, fontWeight: "bold"}}>
      Aulas
    </Text>
    {classes.map((e: any, i: number) => {
      return <Day day={Days[i + 1]} classes={e}/>
    })}
  </View>
}