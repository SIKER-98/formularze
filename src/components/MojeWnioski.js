import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {List, ListItemButton, ListItemText, Typography} from "@mui/material";
import wnioski from '../data/mojeWnioski'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {pink} from '@mui/material/colors';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const MojeWnioski = () => {


    const status = (status) => {
        if (status === 'rozpatrzone pozytywnie')
            return <ThumbUpOffAltIcon/>

        else if (status === 'rozpatrzone negatywnie')
            return <ThumbDownOffAltIcon/>
        else
            return <HourglassEmptyIcon/>
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
                    <Typography>Moje wnioski</Typography>

                    <List
                        sx={{width: '100%'}}
                        component={'nav'}
                        aria-labelledby="nested-list-subheader"
                    >
                        {wnioski.map((wniosek, index) => (
                            <ListItemButton id={index} divider>
                                {wniosek.pilne && <PriorityHighIcon sx={{color: pink[500]}}/>}
                                <ListItemText color={''} primary={wniosek.nazwa + ' - ' + wniosek.status}/>
                                {status(wniosek.status)}
                            </ListItemButton>
                        ))}
                    </List>

                </Paper>
            </Grid>
            <Grid item xs={2}/>

        </Grid>
    )
}

export default MojeWnioski


