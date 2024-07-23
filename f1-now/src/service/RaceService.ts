import { AxiosInstance } from "axios";
import { defaultAxiosInstance } from "./Api";

const RaceService = (api: AxiosInstance = defaultAxiosInstance) => ({
    getCurrentRace: async () => {
        try {
            const response = await api.get(`/f1/current.json`);
            const races = response.data.MRData.RaceTable.Races;

            // Get the current date
            const currentDate = new Date();

            // Filter races that are scheduled to happen in the future
            const futureRaces = races.filter(race => {
                const raceDate = new Date(race.date);
                return raceDate > currentDate;
            });

            // If there are future races, return the first one (the next race)
            if (futureRaces.length > 0) {
                const nextRace = futureRaces[0];
                console.log("Next Race:", nextRace);
                return nextRace;
            } else {
                console.log("No future races found.");
                return null;
            }
        } catch (error) {
            console.error("Error fetching current race:", error);
            return null;
        }
    },
    getAllRace: async () => {
        const response = await api.get(`/f1/current.json`);
        console.log(response)
        const race = response.data.MRData.RaceTable.Races;
        return race;
    }
});

export default RaceService;
