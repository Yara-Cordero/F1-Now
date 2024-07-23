import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import StandingsService from "../service/StandingsService";
import DriverStandingInfo from "../Organism/DriverStandingInfo";

type DriverStandingType = {
  position: string;
  points: string;
  Driver: {
    givenName: string;
    familyName: string;
  };
  Constructors: [
    {
      name: string;
    }
  ];
};

function DriverStandingsPage() {
  const [driverStandingData, setDriverStandingData] = useState<DriverStandingType[]>([]);

  useEffect(() => {
    StandingsService()
      .getCurrentDriverStanding()
      .then((response: DriverStandingType[]) => {
        console.log(response);
        setDriverStandingData(response);
      });
  }, []);

  return (
    <>
      <div>DriverStandingsPage</div>
      <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '120px', marginBottom: '20px', marginTop: '20px' }}>
        Driver Standings
      </Typography>
      <div className="redBox" >
        <Grid container spacing={2} sx={{width: '60%', margin: '0 auto' }}>
        {driverStandingData.map((driverStanding, index) => (
          <DriverStandingInfo
            key={index}
            position={driverStanding.position}
            name={`${driverStanding.Driver.givenName} ${driverStanding.Driver.familyName}`}
            team={driverStanding.Constructors.map((constructor) => constructor.name).join(', ')} // Join team names into a string
            points={driverStanding.points}
          />
        ))}
      </Grid>
      </div>
    </>
  );
}

export default DriverStandingsPage;
