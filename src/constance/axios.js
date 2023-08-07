import axios, { Axios } from "axios";
import { baseUrl } from "./constance";
const instance = axios.create({
    baseURL: baseUrl
})
export default instance