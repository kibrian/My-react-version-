
import './App.css';
import Login from './component/Login';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signup from './component/Signup';
import Home from './component/Home';

function App() {
  return (

    <Router>
    <div className="App">
      <Switch>
         <Route exact path="/home" component={Home} /> 
      
        <Route exact path="/" component={Login} />
        <Route exact path="/Signup" component={Signup} />
     </Switch>
    </div>
  </Router>
   
  );
}

export default App;