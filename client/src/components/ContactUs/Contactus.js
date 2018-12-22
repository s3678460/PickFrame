import React, { Component } from 'react';
import "./Contactus.css"

class Contactus extends Component {
    render() {
        return (
            <div>
            <style dangerouslySetInnerHTML={{__html: "\n\n" }} /> 
            <div className="container1">
              <div className="map">
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAOcs5VtxODOq_ARsAZBy5GKemfnfWkYW8 &q=RMIT University Vietnam Saigon South Campus" width="100%" height="650px" frameBorder={0} style={{border: 0}} allowFullScreen />
              </div>
              <div className="contact-form">
                <h1 className="title">Contact Us</h1>
                <h2 className="subtitle">We are there to assist you.</h2>
                <form action>
                  <input type="text" name="name" placeholder="Name" />
                  <input type="email" name="e-mail" placeholder="E-mail Address" />
                  <input type="tel" name="phone" placeholder="Phone Number" />
                  <textarea name="text" id="" rows="5" placeholder="Message"></textarea>
                  <button className="btn-send">Send</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

export default Contactus;