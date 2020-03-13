import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationComponent from './navigation/navigation-container';
import Home from './pages/home';
import Info from './pages/info';




export default class App extends Component {
  render() {
    return (
      
      <div className='app'>
        <Router>
          <div>
            
          <div className="title">Pet Responsiblity</div>
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
