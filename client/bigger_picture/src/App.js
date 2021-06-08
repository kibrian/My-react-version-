
import './App.css';
import { BrowserRouter as Router, Route,Switch,withRouter} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Booking from "./Booking";
import Admins_panel from "./Admins_panel";

function App() {
  return (
    <Router>
        <div className="App">
           <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Booking" component={Booking} />
              <Route exact path="/Admins_panel" component={Admins_panel} />
           </Switch>
        </div>
    </Router>
  );
}

export default App;
