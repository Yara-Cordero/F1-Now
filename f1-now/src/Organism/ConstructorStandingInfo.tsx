import { Grid, Typography } from "@mui/material"

type ConstructorInfo = {
    position: string,
    team: string,
    points: string
}

function ConstructorStandingInfo ( { position, team, points } : ConstructorInfo) {

    return (
        <>
        <Grid  item xs={12} className="constructorStandingInfo" sx={{margin: '20px'}}>
            <Grid container spacing={1}>
                <Grid item xs={1}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'left', paddingLeft: '14px'}}>
                            {position} 
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'left'}}>
                            {team}
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '30px' , textAlign: 'right', paddingRight: '10px'}}>
                            {points} PTS
                    </Typography>
                </Grid>

            </Grid>
        </Grid>
        </>
    )
}

export default ConstructorStandingInfo