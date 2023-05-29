import axios from "axios"
export default async function updateClassForDay(day: number, classes: string[]) {
  return (await axios.patch(`http://192.168.1.19:3030/day/${day}`,{
    classes
  })).data
}