import { Grid, Typography } from "@mui/material";
import TeamInfo from "../Organism/ConstructorInfo";
import { useEffect, useState } from "react";
import TeamService from "../service/TeamService";

type ConstructorType = {
  name: string;
  nationality: string;
};

function ConstructorPage() {
  const [constructorData, setConstructorData] = useState<ConstructorType[]>([]);

  useEffect(() => {
    TeamService()
      .getCurrentTeams()
      .then((response: unknown) => {
        console.log("API Response:", response);
        const constructors = response.MRData.ConstructorTable.Constructors;
        if (Array.isArray(constructors)) {
          setConstructorData(constructors);
        } else {
          console.error("Unexpected data format:", constructors);
        }
      })
      .catch((error: unknown) => {
        console.error("Error fetching constructors:", error);
      });
  }, []);

  console.log("Constructor Data:", constructorData);

  return (
    <>
      <div>ConstructorPage</div>
      <Typography
        sx={{
          fontFamily: "Bebas Neue",
          fontSize: "120px",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        Constructors
      </Typography>
      <div className="redBox">
        <Grid container spacing={2} sx={{ width: "60%", margin: "0 auto" }}>
          {constructorData.map((constructor, index) => (
            <TeamInfo
              key={index}
              name={constructor.name}
              nationality={constructor.nationality}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default ConstructorPage;
