import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class NavigationComponent extends Component{
    constructor(){
        super();
    }


    
    render(){
        return(
            <div className ="nav-wrapper">
               
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            <h1>Home</h1>
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/info" activeClassName="nav-link-active">
                            <h1>Information</h1>
                        </NavLink>
                    </div>
                
            </div>
        )
    }
}        