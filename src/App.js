import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import User from './components/User';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';

const App=()=> {
  return (
    <Router>
    <div className="App">
    <NavBar/>
        <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/user" exact component={User}/>
        </Switch>
    
    </div>
    </Router>
  );
}

export default App;
