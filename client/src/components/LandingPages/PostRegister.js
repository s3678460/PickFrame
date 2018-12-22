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
                                <i className="fa fa-check" style={{fontSize: '80px', color: 'orange'}} />
                                <div style={{fontSize:"40px"}}> Congratulations!</div>
                                You have succesfully registered for an account on
                                <div style={{fontSize:"25px"}}>PickFrame</div>

                                <p>Getting inside now by<span></span></p>
                                <Link to="/login"><b style={{fontSize:20}}>Login</b> </Link>
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