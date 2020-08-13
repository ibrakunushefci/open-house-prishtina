import React from 'react';

import AppNavbar from './Components/Navbar';
import News from './Pages/News/News';

import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Container>

        <Router>
          <AppNavbar />

          <Switch>
            <Route path="/news">
              <News />
            </Route>
          </Switch>
        </Router>

      </Container>
    </div>
  );
}

export default App;