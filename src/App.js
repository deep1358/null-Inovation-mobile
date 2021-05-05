import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MobileForm from "./Components/MobileForm/MobileForm";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={MobileForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
