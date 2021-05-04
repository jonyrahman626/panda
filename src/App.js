import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './components/pages/Index';
import About from './components/pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        
        <Router>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/about" component={About} />
          </Switch>
        </Router>
        

        <Footer />

      </div>
    );
  }
}

export default App;
