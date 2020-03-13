import React, { Component } from 'react';
import DogOne from '../../../static/assets/images/pets/dog1.jpg';
import DogTwo from '../../../static/assets/images/pets/dog2.jpg';
import DogThree from '../../../static/assets/images/pets/dog3.jpg';
import CatOne from '../../../static/assets/images/pets/cats1.jpg';
import CatTwo from '../../../static/assets/images/pets/cats2.jpg';
import CatThree from '../../../static/assets/images/pets/cats3.jpg';


export default class Home extends Component {
  constructor(){
    super();

      this.state = {
        status: true
      }
      this.togglePictures = this.togglePictures.bind(this)
  }

  togglePictures(){
    if (this.state.status){
      this.setState({
        status: false
      });
    }else{
      this.setState({
        status: true
      });
    }
  }

  render(){
    if (this.state.status === true){
        return (
          <div className="container">
            <div className='heading'>
              <h1>If you love your pets, please get them registered.</h1>
            </div>
            <div className="btn-wrapper">
              <button onClick={this.togglePictures} className="toggleBtn">   Click for Cat pictures   </button>
            </div>
              <div className="content-wrapper">
              
              <div className="images images-dogs">
                <img src='../../../static/assets/images/pets/dog1.jpg' />
                <img src='../../../static/assets/images/pets/dog2.jpg' />
                <img src='../../../static/assets/images/pets/dog3.jpg' />
              </div>
                
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43446.67410479234!2d-104.74305983826552!3d47.11049611351959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5324c24dc5947ba3%3A0x7a5482eacacd0e83!2sGlendive%2C%20MT%2059330!5e0!3m2!1sen!2sus!4v1584119843123!5m2!1sen!2sus"></iframe>
            </div>
          </div>

      );
    } else {
      return (
        <div className="container">
          <div className='heading'>
            <h1>If you love your pets, please get them registered.</h1>
          </div>

          <div className="btn-wrapper">
              <button onClick={this.togglePictures} className="toggleBtn">   Click for Dog pictures   </button>
            </div>

          <div className="content-wrapper">
            
          <div className="images images-cats">
                <img src='../../../static/assets/images/pets/cats1.jpg' />
                <img src='../../../static/assets/images/pets/cats2.jpg' />
                <img src='../../../static/assets/images/pets/cats3.jpg' />
              </div>
            
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43446.67410479234!2d-104.74305983826552!3d47.11049611351959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5324c24dc5947ba3%3A0x7a5482eacacd0e83!2sGlendive%2C%20MT%2059330!5e0!3m2!1sen!2sus!4v1584119843123!5m2!1sen!2sus"></iframe>
          </div>
        </div>

    );
    }
  } 
}
    

