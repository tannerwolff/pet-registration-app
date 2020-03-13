import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



export default class NavigationComponent extends Component{
    constructor(){
        super();
    }


    
    render(){
        return(
            <div className ="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="/info" activeClassName="nav-link-active">
                            Information
                        </NavLink>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}        