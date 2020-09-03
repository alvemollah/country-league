import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import Country from './Component/Country/Country';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/home">
              <Home />
          </Route>

          <Route exact path="/country/:countryId">
            <Country></Country>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
