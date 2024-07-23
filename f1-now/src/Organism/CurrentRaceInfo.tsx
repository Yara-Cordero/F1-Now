import { Grid, Typography } from "@mui/material"
import { useState } from "react"

type RaceInfo = {
    name: string,
    dateAndTime : string

}

function CurrentRaceInfo ({name, dateAndTime}:RaceInfo) {

return (
    <>
    <Grid item xs={6}>
        <Typography sx={{fontFamily: 'Bebas Neue', fontSize: '35px', margin: '7px'}}>
            {name}
        </Typography>
    </Grid>
    <Grid item xs={6}>
        <Typography sx={{fontFamily: 'Bebas Neue', fontSize: '35px', margin: '7px'}}>
            {dateAndTime}
        </Typography>
    </Grid>
    </>
)
}

export default CurrentRaceInfo