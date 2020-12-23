import React from 'react';
import Post from './Post';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';

const Home=()=>{



    return(
        <div>
        <NavBar/>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Grid item xs={10} md={10} lg={6}>
            <Post/>
            </Grid>
        </Grid>
        
        </div>
    );
}
export default Home;