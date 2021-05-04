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
            <Route path="/" component={Index} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
        

        <Footer />

      </div>
    );
  }
}

export default App;
