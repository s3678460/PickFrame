import React, { Component } from 'react';
import { Col, Container, Row, Footer, Fa,NavLink } from "mdbreact";
import "./FooterPage.css";
import logo from "../../images/logo-white.png"
import {Link}from"react-router-dom"

class FooterPage extends Component {
    render() {
        return (
            <Footer color="black" className="footerpage font-small mt-4">
                <Container className="text-center text-md-left">
                    <Row>
                        <Col md="3">
                            <img src={logo} height="50" />
                        </Col>
                        <Col md="2">
                            <div className="blocklink">
                                <h5>Learn More</h5>
                                <a href="#">Promo codes</a>
                                <a href="#">License information</a>
                                <a href="#">Legal / Privacy</a>
                            </div>
                        </Col>
                        <Col md="2">
                            <div className="blocklink">
                                <h5>Company</h5>
                                <Link to="/aboutus"><a>About us</a></Link>
                                <a href="#">Press</a>
                                <a href="#">Careers</a>
                            </div>
                        </Col>
                        <Col md="2">
                            <div className="blocklink">
                                <h5>Support</h5>
                                <a href="#">0123456789</a>
                                <a href="#">Contact us</a>
                                <Link to="/QA"><a>FAQ</a></Link>
                                <a href="#">Site map</a>
                            </div>
                        </Col>
                        <Col md="3">
                            <Row>
                                <Col>
                                    <div className="iconsocial">
                                        <a href="#" className="fa fa-facebook"></a>
                                        <a href="#" className="fa fa-twitter" />
                                        <a href="#" className="fa fa-instagram" />
                                        <a href="#" className="fa fa-google-plus" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center pt-5 pb-3">
                    <Container fluid>
                        &copy; {new Date().getFullYear()} Copyright:{" "}
                        <a href="https://www.pickframe.com"> PickFrame.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;