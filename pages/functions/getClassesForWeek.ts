import axios from "axios"
import DayResponse from "../models/DayResponse"

export default async function getClassesForWeek() {
  const response = await axios("http://192.168.1.19:3030/day")
  const result: DayResponse = response.data
  return result.content
}