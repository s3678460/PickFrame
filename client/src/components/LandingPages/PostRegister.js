import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './PostRegister.css' 
import {MDBIcon} from 'mdbreact'


class PostRegister extends Component {
    render() {
        return (
            <div>

                <div className="post-register">

                    <div className="vid-container-post">

                        <div className="inner-container-post">

                            <div className="box-post">
                                <div className="logo">
                                    <div className="clickable">
                                        <h1><a href="#" target="_blank"><img src="http://funkyimg.com/p/2NhH3.png" alt="Free Image Hosting at FunkyIMG.com" border={0} /></a></h1></div>
                                </div>
                                
                                <div className="context" >
                                <i className="fa fa-check" style={{fontSize: '20px', color: 'green'}} />
                                <div style={{fontSize:"20px",fontWeight:"bold"}}> Congratulations!</div>
                                You have succesfully registered for an account on PickFrame. <br/>
                                You need to verify your account firstly by passing the confirmation code to the link that you will receive in your mailbox within an hour.
                                

                                

                                
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default PostRegister;