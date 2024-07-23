import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const DriverService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getAllCurrentDrivers: async () => {
    const response = await api.get(`/f1/current/drivers.json`);
    console.log("Raw API Response:", response);
    return response.data;
  },
  getDriverByName: async (name: string) => {
    const response = await api.get(`/f1/drivers/${name}.json`);
    console.log("Raw API Response:", response);
    return response.data;
  },
});

export default DriverService;
