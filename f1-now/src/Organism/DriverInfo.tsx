import { Grid, Typography } from "@mui/material";

type DriverInfoProps = {
  name: string;
  nationality: string;
  birthDate: string;
  age: number;
};

function DriversInfo({ name, nationality, birthDate, age }: DriverInfoProps) {
  return (
    <Grid item xs={12} className="driverInfo" sx={{ margin: "20px" }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={4}>
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontSize: "50px",
              textAlign: "left",
            }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontSize: "30px",
              textAlign: "left",
            }}
          >
            Birth Date: {birthDate}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontSize: "30px",
              textAlign: "left",
            }}
          >
            Nationality: {nationality}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontSize: "80px",
              textAlign: "right",
            }}
          >
            {age}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default DriversInfo;
