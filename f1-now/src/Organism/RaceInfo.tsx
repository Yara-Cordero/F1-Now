import { Box, Grid, Typography } from "@mui/material"


type RaceInfo = {
    round: string,
    raceName: string,
    circuit: string,
    date: string
}

function RaceInfo ( { round, raceName, circuit, date} : RaceInfo) {

    const words = circuit.split(" ");
    let formattedCircuit;

    if (words.length >= 5 ){
        formattedCircuit = (
            <>
            <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '45px'}}>
                {words.slice(0, 2).join(' ')}
            </Typography>
            <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '45px'}}>
                {words.slice(2).join(' ')}
            </Typography>
            </>
        );
    } else {
        formattedCircuit = (
            <>
                <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '45px'}}>
                {words[0]}
                </Typography>
                <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '45px'}}>
                {words.slice(1).join(' ')}
                </Typography>
            </>
        );
    }

    return (
        <Grid item xs={12} className="raceInfo" sx={{margin: '20px'}}>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '35px' , textAlign: 'left'}}>
                        Round {round}  
                    </Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '70px' , textAlign: 'center' , marginBottom: '0px'}}>
                        {raceName}
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Typography sx={{textAlign: 'center'}}>
                        {formattedCircuit}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={{ fontFamily: 'Bebas Neue', fontSize: '35px', marginTop: '34%', textAlign: 'right'}}>
                        {date}
                    </Typography>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default RaceInfo