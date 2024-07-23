import axios, { AxiosInstance } from "axios";

const BASE_URL = 'http://ergast.com/api'

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

