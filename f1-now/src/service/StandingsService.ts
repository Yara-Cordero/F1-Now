import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";


const StandingsService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getCurrentDriverStanding: async () => {
        const response = await api.get(`/f1/current/driverStandings.json`);
        console.log(response);
        const standings = response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        return standings;
    },
    getCurrentConstructurStandings : async () => {
        const response = await api.get(`/f1/current/constructorStandings.json`);
        console.log(response);
        const standings = response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings;
        return standings;
    }
})

export default StandingsService