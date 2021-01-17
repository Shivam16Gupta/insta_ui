import React from 'react';
import Post from './Post';
import Stories from './Stories';
import Sidebar from './Sidebar';
import classes from'../assets/css/Home.module.css';



const Home=()=>{



    return(
        <div className={classes.arrange}>
        <div className={classes.box1}>

            <Stories/>
            <Post/>

        </div>
        <div className={classes.box2}>
        <Sidebar/>
        </div>
        </div>
    );
}
export default Home;
