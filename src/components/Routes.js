import React from 'react';
import Home from './Home';
import Message from './Message';
// import Explore from './Explore';
// import Notif from './Notif';
// import Profile from './Profile';

import {Route,Switch} from 'react-router-dom';

const Routes=()=>{

    return(
        
            <div>
            
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/message" exact component={Message}/>
                    {/* <Route path='/explore' exact component={Explore}/> */}
                    {/* <Route path='/notif' exact component={Notif}/> */}
                    {/* <Route path='/profile' exact component={Profile}/> */}
                    
                </Switch>
            </div>
       
    );
}
export default Routes;