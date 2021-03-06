import React, { Component } from 'react';
import { Col, Container, Row, Footer } from "mdbreact";
import "./FooterPage.css";
import logo from "../../images/logo-white.png"
import {Link}from"react-router-dom"

class FooterPage extends Component {
    render() {
        return (
            <footer className="footerpage page-footer black">
                <Container className="text-center text-md-left">
                    <Row>
                        <Col md="3">
                            <img src={logo} height="50" />
                        </Col>
                        <Col md="2">
                            <div className="blocklink">
                                <h5>Learn More</h5>
                                <a href="#">Promo codes</a>
                                <Link to="/LicenseTerm"><a>License Term</a></Link>
                                <Link to="/LegalPrivacy"><a>Legal / Privacy</a></Link>
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
                                <a href="#">0905352082</a>
                                <Link to="/Contactus"><a>Contact us</a></Link>
                                <Link to="/QA"><a>FAQ</a></Link>
                                <Link to="/Sitemap"><a>Site map</a></Link>
                            </div>
                        </Col>
                        <Col md="3">
                            <Row>
                                <Col>
                                    <div className="iconsocial">
                                        <a href="https://www.facebook.com/pickframetm/" className="fa fa-facebook"></a>
                                        <a href="#" className="fa fa-twitter" />
                                        <a href="https://www.instagram.com/pick_frame/?hl=en" className="fa fa-instagram" />
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
                        <a href="https://www.pickframe.com"> PickFrame.tk </a>
                    </Container>
                </div>
            </footer>
        );
    }
}

export default FooterPage;