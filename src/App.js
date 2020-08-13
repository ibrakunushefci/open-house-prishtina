import React from 'react';
import AppNavbar from './Components/Navbar';

import News from './Pages/News/News';
import Contact from './Pages/Contact/Contact';

import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss'

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
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;