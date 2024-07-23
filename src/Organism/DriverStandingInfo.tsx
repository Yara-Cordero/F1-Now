import { Grid, Typography } from "@mui/material"


type DriverInfo = {
    position: string,
    name: string,
    team: string,
    points: string
}

const teamColors: { [key:string] : string} = {
    "Mercedes" : "#27F4D2",
    "Red Bull" : "#3671C6",
    "McLaren" : "#FF8000",
    "Ferrari" : "#E8002D",
    "Aston Martin" : "#229971",
    "Haas F1 Team" : "#B6BABD", 
    "RB F1 Team" : "#6692FF",
    "Alpine F1 Team" : "#FF87BC",
    "Williams" : "#64C4FF",
    "Sauber" : "#52E252"
}

function DriverStandingInfo ( { position, name, team, points} : DriverInfo) {
    const teamColor = teamColors[team] || "#000000";


    return (
        <Grid item xs={12} className="driverStandingInfo" sx={{margin: '20px'}}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'left', paddingLeft: '14px'}}>
                        {position}  
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'left'}}>
                        {name}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'left', color: teamColor}}>
                        {team}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'right', paddingRight: '10px'}}>
                        {points} PTS
                    </Typography>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default DriverStandingInfo