import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {useHistory} from "react-router";

import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import RuleIcon from '@mui/icons-material/Rule';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import LogoutIcon from '@mui/icons-material/Logout';


export const MainListItems = (props)=> {
    let history = useHistory()

    const zlozWniosek = () =>{
        history.push('/skladanie')
    }

    const rozpatrzWniosek = () =>{
        history.push('/rozpatrywanie')
    }

    const mojeWnioski = () =>{
        history.push('/mojeWnioski')
    }

    const wybierzWniosek = () =>{
        history.push('/wnioski')
    }

    return(
    <>
        <ListItem button>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Profil" />
        </ListItem>
        <ListItem button onClick={zlozWniosek}>
            <ListItemIcon>
                <ForwardToInboxIcon />
            </ListItemIcon>
            <ListItemText primary="Napisz wniosek" />
        </ListItem>

        <ListItem button onClick={wybierzWniosek}>
            <ListItemIcon>
                <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Wybierz wniosek" />
        </ListItem>

        <ListItem button onClick={rozpatrzWniosek}>
            <ListItemIcon>
                <RuleIcon />
            </ListItemIcon>
            <ListItemText primary="Rozpatrz wnioski" />
        </ListItem>

        <ListItem button onClick={mojeWnioski}>
            <ListItemIcon>
                <ThumbsUpDownIcon />
            </ListItemIcon>
            <ListItemText primary="Moje wnioski" />
        </ListItem>
    </>
)};

export const secondaryListItems = (
    <div>
        {/*<ListSubheader inset></ListSubheader>*/}
        <ListItem button>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Wyloguj" />
        </ListItem>
    </div>
);
