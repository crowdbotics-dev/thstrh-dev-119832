import axios from "axios"
import { NEWPVNT34_USERNAME, NEWPVNT34_PASSWORD } from "react-native-dotenv"
const newpvnt = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: { username: NEWPVNT34_USERNAME, password: NEWPVNT34_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
