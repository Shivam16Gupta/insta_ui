import React from 'react';
import Post from './Post';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';

import Message from './Message';
// import Explore from './Explore';
// import Notif from './Notif';
// import Profile from './Profile';
import {Route,Switch} from 'react-router-dom';

const Home=()=>{



    return(
        <div>
        <NavBar/>
        <Switch>
                    <Route path="/"/>
                    <Route path="/message"  component={Message}/>
                    {/* <Route path='/explore' exact component={Explore}/> */}
                    {/* <Route path='/notif' exact component={Notif}/> */}
                    {/* <Route path='/profile' exact component={Profile}/> */}
                    
                </Switch>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Grid item xs={10} md={6} lg={6}>
            <Post/>
            </Grid>
        </Grid>
        
        </div>
    );
}
export default Home;