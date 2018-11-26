import React, { Component } from 'react';
import './OrdersPage.css';
import { Link } from "react-router-dom";

class OrdersPage extends Component {
    render() {
        return (
            <div className="container-fluid-order" style={{ maxHeight: "100%" }}>
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="order-box1">
                            <h1>Checkout</h1>
                            <div className="checkout-box">
                                <form className="form-checkout">
                                    <h2>Billing Information</h2>
                                    <span><input required type="text" placeholder="Organization or Company" /></span>
                                    <span><input required type="text" placeholder="Email" /></span>
                                    <span><input requiredtype="text" placeholder="Address" /></span>
                                    <span><input required type="text" placeholder="Phone" /></span>
                                    <h2>Bank Information</h2>
                                    <span><input required type="text" placeholder="Account holder" /></span>
                                    <span><input required type="text" placeholder="Card number" /></span>
                                    <span><input requiredtype="text" placeholder="Bank name" /></span>
                                    <span><input required type="text" placeholder="Bank branch" /></span>
                                    <div className="total">
                                    <h2  >Total</h2>
                                    <b>$30.00 USD</b>
                                    <b style={{fontSize:"10pt"}}><p>I have read and accept our <Link to="#">Website Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Licensing Terms.</Link> </p></b>
                                    <button>
                                    I agree - Pay now
                                    </button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="order-box1" style={{position:"absolute"}}>
                    <h1>Order Summary</h1>
                    <div className="checkout-box-2">
                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        
                    
                    
                    <div className="summary-image">
                    <img src="https://images3.alphacoders.com/823/82317.jpg" style={{height:"180%",width:"180%"}}></img>
                    </div>
                    <p style={{fontSize:"10pt"}}>1 PickFrame Credit</p>
                    
                    </div>
                    

                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <b>$30.00 USD</b>
                    </div>
                    

                    
                    
                    
                    
                    
                    </div>
                    <span style={{paddingRight:"50px",paddingLeft:"18px",fontSize:"20pt"}}>Total</span>
                    <span style={{textAlign:"right",fontWeight:"bold",fontSize:"20pt"}}>$30.00 USD</span>
                    
                    </div>

                        
                    </div>
                    

                </div>



            </div>
        );
    }
}

export default OrdersPage;