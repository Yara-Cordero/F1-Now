import { useEffect, useState } from "react";
import StandingsService from "../service/StandingsService";
import { Grid, Typography } from "@mui/material";
import ConstructorStandingInfo from "../Organism/ConstructorStandingInfo";

type ConstructorStandingType = {
  position: string;
  points: string;
  Constructor: {
    name: string;
  };
};

function ConstructorStandingsPage() {
  const [constructorStandingData, setConstructorStandingData] = useState<ConstructorStandingType[]>([]);

  useEffect(() => {
    StandingsService()
      .getCurrentConstructurStandings()
      .then((response: ConstructorStandingType[]) => {
        console.log(response);
        setConstructorStandingData(response);
      });
  }, []);

  return (
    <>
      <div>ConstructorStandingsPage</div>
      <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '120px', marginBottom: '20px', marginTop: '20px' }}>
        Constructor Standings
      </Typography>
      <div className="redBox">
        <Grid container spacing={2} sx={{width: '60%', margin: '0 auto' }}>
          {constructorStandingData.map((constructorStanding, index) => (
            <ConstructorStandingInfo key={index} position={constructorStanding.position} team={constructorStanding.Constructor.name} points={constructorStanding.points} />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default ConstructorStandingsPage;
