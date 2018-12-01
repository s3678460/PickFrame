import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './PostRegister.css' 


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
                                Congratulations! You have succesfully registered for an account on PickFrame

                                <p>Getting inside now by<span></span></p>
                                <Link to="/login"><b style={{fontSize:30}}>Login</b> </Link>
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