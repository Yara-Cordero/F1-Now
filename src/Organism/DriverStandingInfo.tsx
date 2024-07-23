import { Grid, Typography } from "@mui/material"


type DriverInfo = {
    position: string,
    name: string,
    team: string,
    points: string
}

function DriverStandingInfo ( { position, name, team, points} : DriverInfo) {


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
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'left'}}>
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