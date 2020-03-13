import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationComponent from './navigation/navigation-container';
import Home from './pages/home';
import Info from './pages/info';

import{ Link } from 'react-router';


export default class App extends Component {
  render() {
    return (
      
      <div className='app'>
        <Router>
          <div>
            
          
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component = {Home} />
              <Route path="/info" component = {Info} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
