import React from 'react';
import Post from './Post';
import Grid from '@material-ui/core/Grid';
import Stories from './Stories';

const Home=()=>{



    return(
        <div>
        
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center">
            <Grid item xs={10} md={6} lg={6}>
            <Stories/>
            <Post/>
            </Grid>
        </Grid>
        
        </div>
    );
}
export default Home;