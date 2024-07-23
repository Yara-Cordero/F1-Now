import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const TeamService = (api: AxiosInstance = defaultAxiosInstance) => ({
  getCurrentTeams: async () => {
    const response = await api.get(`/f1/current/constructors.json`);
    console.log("Raw API Response:", response);
    return response.data;
  },
  getCurrentTeamsByName: async (name: string) => {
    const response = await api.get(`/f1/constructors/${name}`);
    console.log("Raw API Response:", response);
    return response.data;
  },
});

export default TeamService;
