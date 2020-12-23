import {BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Home from '../src/components/Home';

const App=()=> {
  return (
    <Router>
    <div className="App">
      <Home/>
    </div>
    </Router>
  );
}

export default App;
