import { StyleSheet, Text, View } from "react-native"; 
import React, { useState, useEffect } from "react";
import Day from "./components/Day";
import Days from "./utils/Days";
import getClassesForWeek from "./functions/getClassesForWeek";
import Container from "./components/Container";

import * as Device from "expo-device"
import * as Notifications from "expo-notifications"
import {Platform} from "react-native"

const s = StyleSheet.create({
  title: {
    fontSize: 25, 
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20
  }
})

async function push() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}

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

