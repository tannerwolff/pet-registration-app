import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import{ Link } from 'react-router';

// function Info() {

export default class Info extends Component {
    render() {
        return (
            <div className="localInfo">
                <div className="header-wrapper"></div>
                <div className="cityOfGlendive">
                    <h1>City of Glendive<br/></h1>
                    <h2>Pet Licensing Fees:<br/>
                    Proof of rabies vaccination and proof <br/>that animal is spayed/neutered is required.<br/>
                    -Spayed or Neutered: $10/year<br/>
                    -Non Spayed or Neutered: $30/year<br/><br/>
                    City Hall <br/>
                    Address:<br/>
                    300 S. Merrill Ave.<br/>
                    Glendive, Montana 59330<br/><br/>
                    Phone:<br/>
                    (406) 377-3318</h2>
                    <div className="glendiveWebsite">
                        
                        <button><a target ="_blank"href="http://cityofglendive.us/departments/finance/city_licensing/index.php">
                        Glendive Website</a></button>

                    </div>
                    <br/><br/>
                </div>
                <div className="glendivePolice">
                   <h1>Glendive Police Station<br/></h1> 
                   <h2>Address:<br/>
                   440 Colorado Blvd<br/>
                   Glendive, Montana 59330<br/><br/>
                   Phone:<br/>
                   (406) 377-2596</h2>
                   <div className="glendiveFacebook">
                   <button><a target="_blank" href="https://www.facebook.com/Glendive-Police-Department-654950967879956/">
                       Glendive Facebook</a></button>
                   </div>
                   <br/><br/>
                </div>
                <div className="dawsonCounty">
                    <h1>Dawson County Sheriff's Office<br/></h1>
                    <h2>Address:<br/>
                        440 Colorado Blvd<br/>
                        Glendive, Montana 59330<br/><br/>
                        Phone:<br/>
                        (406) 377-5261</h2>
                        <div className="dawsonCountyWebsite">
                        <button><a target="_blank" href="http://www.dawsoncountymontana.org/">
                            Dawson County Website</a></button>
                        </div>
                        <br/><br/>
                </div>
                <div className="fosterAPet">
                    <h1>Fostering a Pet</h1>
                    <h1>Happy Tails</h1>
                    <h3>Mission to keep pets from being abandoned or homeless</h3><br/>
                    <h2>Phone:<br/>
                        (406) 359-9472
                    </h2>
                    <div className="petFacebook">
                    <button><a target="_blank" href="https://www.facebook.com/MThappytails/?hc_location=ufi">Facebook</a></button>
                    </div>
                    <div className="happyTailsEmail">
                    <button><a target="_blank" href= "mailto:kris.happytails@gmail.com?subject=Pet Foster">Email</a></button>
                    </div>
                        <h2>kris.happytails@gmail.com</h2>

                
                </div>
                <div className="footer-wrapper"></div>
            </div>
        );
    }
}
// }
// export default Info;