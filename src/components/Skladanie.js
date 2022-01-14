import React, {useState} from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
    Alert,
    Button,
    FormControlLabel, Snackbar, Switch,
    TextField,
    Typography
} from "@mui/material";
import Box from "@mui/material/Box";

const Skladanie = (props) => {
    const [pilne, setPilne] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const [open, setOpen] = useState(false)
    const [openWarning, setOpenWarning] = useState(false)

    const [titleError, setTitleError] = useState(false)
    const [contentError, setContentError] = useState(false)

    function handlePilne(event) {
        console.log('click')
        setPilne(event.target.checked)
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        setOpenWarning(false)
    };

    const validate = () => {
        if (!title) {
            setTitleError(true)
            setOpenWarning(true)
            return
        } else {
            setTitleError(false)
        }

        if (!content) {
            setContentError(true)
            setOpenWarning(true)
            return
        } else {
            setContentError(false)
        }

        setOpen(true)
    }

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
                    <Typography>Wypełnij wniosek</Typography>

                    <TextField label={'Nazwa wniosku'}
                               variant={'outlined'}
                               error={titleError}
                               margin={'normal'}
                               onChange={(event) => {
                                   setTitle(event.target.value)
                               }}
                    />
                    <TextField label={'Treść wniosku'}
                               variant={'outlined'}
                               multiline
                               error={contentError}
                               maxRows={20}
                               minRows={5}
                               margin={'normal'}
                               onChange={(event) => {
                                   setContent(event.target.value)
                               }}
                    />

                    <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <FormControlLabel label={'Pilne'}
                                          control={
                                              <Switch checked={pilne} onChange={handlePilne} color={'secondary'}/>
                                          }/>

                        <Button variant={'contained'} color={'primary'} onClick={validate}> Złóż wniosek</Button>
                    </Box>

                </Paper>
            </Grid>
            <Grid item xs={2}/>


            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                    Pozytywnie złożono wniosek!
                </Alert>
            </Snackbar>

            <Snackbar open={openWarning} autoHideDuration={2000} onClose={handleClose}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert onClose={handleClose} severity="warning" sx={{width: '100%'}}>
                    Uzupełnij wszystkie pola
                </Alert>
            </Snackbar>
        </Grid>
    )
}

export default Skladanie


// <Grid container spacing={3} direction={'column'} justifyContent={'center'} >
//     {/*Chart */}
// <Grid item xs={2}/>
// <Grid item xs>
//     <Paper
//         sx={{
//             p: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             height: 240,
//         }}
//     >
//         <Chart/>
//     </Paper>
// </Grid>
// <Grid item xs={2}/>
//
// </Grid>
