import React from 'react'
import {createTheme, ThemeProvider} from '@material-ui/core'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./layout/Layout";
import Wnioski from "./components/Wnioski";
import Skladanie from "./components/Skladanie";
import Rozpatrywanie from "./components/Rozpatrywanie";
import MojeWnioski from "./components/MojeWnioski";
import Home from "./components/Home";

const theme = createTheme({
    palette: {
        primary: {
            light: '#63ccff',
            main: '#009be5',
            dark: '#006db3',
        },
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/wnioski'} component={Wnioski}/>
                        <Route path={'/skladanie'} component={Skladanie}/>
                        <Route path={'/rozpatrywanie'} component={Rozpatrywanie}/>
                        <Route path={'/mojeWnioski'} component={MojeWnioski}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
