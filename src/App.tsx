import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Grid from "./Grid";
import Flexbox from "./Flexbox";
import CoExist from "./CoExist";
import ResponsiveGrid from "./ResponsiveGrid";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>Check out these examples:</header>
        <nav>
          <ul>
            <li>
              <Link to="/flexbox">Flexbox</Link>
            </li>
            <li>
              <Link to="/grid">Grid</Link>
            </li>
            <li>
              <Link to="/responsive-grid">Responsive Grid</Link>
            </li>
            <li>
              <Link to="/coexist">CoExist</Link>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
      <div className="main-content">
        <Switch>
          <Route exact path="/grid">
            <Grid />
          </Route>
          <Route exact path="/flexbox">
            <Flexbox />
          </Route>
          <Route exact path="/responsive-grid">
            <ResponsiveGrid />
          </Route>
          <Route exact path="/coexist">
            <CoExist />
          </Route>
          {/* <NotFound default /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
