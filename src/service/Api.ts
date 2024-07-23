import axios, { AxiosInstance } from "axios";

const BASE_URL = 'https://ergast.com/api'

export const defaultAxiosInstance: AxiosInstance = axios.create({
    baseURL: BASE_URL,
})

