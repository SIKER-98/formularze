import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
    Alert,
    Button, FormControlLabel, Snackbar, Switch,
    TextField,
    Typography
} from "@mui/material";

import Box from "@mui/material/Box";
import rozpatrywany from "../data/rozpatrywany";

const Rozpatrywanie = () => {
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)

    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setError(false);
    };

    return (
        <Grid container spacing={3} direction={'column'} justifyContent={'center'}>
            {/*Chart */}
            <Grid item xs={2}/>
            <Grid item xs>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        // height: 240,
                    }}
                >
                    <Typography>Rozpatrz wniosek {rozpatrywany.pilne && <b>PILNE !</b>}</Typography>
                    <br/>
                    <Typography><b>Nazwa wniosku:</b> {rozpatrywany.title}</Typography>
                    <Typography><b>Imie:</b> {rozpatrywany.imie}</Typography>
                    <Typography><b>Nazwisko:</b> {rozpatrywany.nazwisko}</Typography>
                    <Typography><b>Telefon:</b> {rozpatrywany.telefon}</Typography>
                    <Typography><b>Stanowisko:</b> {rozpatrywany.stanowisko}</Typography>
                    <Typography><b>Email:</b> {rozpatrywany.email}</Typography>


                    <Typography sx={{m: 3}}>{rozpatrywany.tresc}</Typography>

                    <FormControlLabel label={'Czy wniosek ma być rozpatrzony jako pilne?'}
                                      control={
                                          <Switch defaultChecked={rozpatrywany.pilne} color={'secondary'}/>
                                      }/>

                    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <Button variant={'contained'} sx={{m: 1}} fullWidth color={'secondary'} onClick={() => {
                            setError(true)
                        }}>Odrzuć</Button>
                        <Button variant={'contained'} sx={{m: 1}} fullWidth color={'primary'} onClick={() => {
                            setOpen(true)
                        }}>Akceptuj</Button>
                    </Box>

                </Paper>
            </Grid>
            <Grid item xs={2}/>

            <Snackbar open={open} autoHideDuration={2000} onClose={handleCloseSuccess}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert onClose={handleCloseSuccess} severity="success" sx={{width: '100%'}}>
                    Pozytywnie rozpatrzono wniosek!
                </Alert>
            </Snackbar>

            <Snackbar open={error} autoHideDuration={2000} onClose={handleCloseError}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert onClose={handleCloseError} severity="error" sx={{width: '100%'}}>
                    Odrzucono wniosek!
                </Alert>
            </Snackbar>
        </Grid>
    )
}

export default Rozpatrywanie

