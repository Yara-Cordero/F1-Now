import { Grid, Typography } from "@mui/material";

type ConstructorInfo = {
  name: string;
  nationality: string;
};

function TeamInfo({ name, nationality }: ConstructorInfo) {
  return (
    <Grid item xs={12} className="constructorInfo" sx={{ margin: "20px" }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={9}>
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontSize: "30px",
              textAlign: "left",
            }}
          >
            {name}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography
            sx={{
              fontFamily: "Bebas Neue",
              fontSize: "30px",
              textAlign: "left",
            }}
          >
            Nationality:<br></br>
            {nationality}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TeamInfo;
