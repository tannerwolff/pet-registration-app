import React, { Component } from 'react';
import NavigationComponent from './navigation/navigation-container';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavigationComponent />
      </div>
    );
  }
}
