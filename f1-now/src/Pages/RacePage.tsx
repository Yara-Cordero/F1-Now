import { Grid, Typography } from "@mui/material";
import RaceInfo from "../Organism/RaceInfo";
import { useEffect, useState } from "react";
import RaceService from "../service/RaceService";

type RaceType = {
  round : string,
  date: string 
  raceName : string,
  Circuit : {
    circuitName : string
  };
}

function RacePage() {
  const [raceData, setRaceData] = useState<RaceType[]>([]);

  useEffect(() => {
    RaceService()
      .getAllRace()
      .then((response: RaceType[]) => {
        console.log(response);
        setRaceData(response);
      })
  }, [])

  return (
    <>
    <div>RacePage</div>
    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '120px', marginBottom: '20px', marginTop: '20px' }}>
      Races
    </Typography>
    <div className="redBox">
      <Grid container spacing={2} sx={{width: '60%', margin: '0 auto' }}>
        {raceData.map((raceInfo, index) => (
          <RaceInfo key={index}
            round={raceInfo.round}
            raceName={raceInfo.raceName}
            circuit={raceInfo.Circuit.circuitName}
            date={raceInfo.date} 
          />
        ))}
        
      </Grid>
    </div>
    </>
  )
}

export default RacePage