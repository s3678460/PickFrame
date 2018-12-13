import React, { Component } from 'react';
import './OrdersPage.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addOrders} from "../../actions/orderActions";


import classnames from "classnames";

class OrdersPage extends Component {

    constructor(props){
        super(props);
        this.state={
            companyName: '',
            address: '',
            companyPhone: '',
            accountHolder:'',
            cardNumber:'',
            bankName:'',
            bankBranch:'',
            email: '',
            productId: '',
            total: '',
            // status: '',
            errors:{}

        };
    
    // this.onChange=this.onChange.bind(this);
    // this.onSubmit=this.onSubmit.bind(this);
    }

  
    componentWillMount(){
        const { images } = this.props.image;
        const imageIDTarget = this.props.match.params._id
        const imageTarget = images.find((image) => {
            return image._id === imageIDTarget
        })

        this.setState({
            productId: imageTarget._id,
            total: imageTarget.price
        })

    }
    
    componentWillReceiveProps(newProps){
        console.log(newProps);
        if (newProps.errors){
            this.setState({errors: newProps.errors})
        }
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    }

    

    onSubmit = (e) =>{
        e.preventDefault();
        // console.log('submit');
        
        const newOrder = {
            companyName: this.state.companyName,
            address: this.state.address,
            companyPhone: this.state.companyName,
            accountHolder: this.state.accountHolder,
            cardNumber: this.state.cardNumber,
            bankName: this.state.bankName,
            bankBranch: this.state.bankBranch,
            productId: this.state.productId,
            total: this.state.total,
            email: this.state.email
        }

        this.props.addOrders(newOrder, this.props.history);
        this.setState({
            companyName: '',
            address: '',
            companyPhone: '',
            accountHolder:'',
            cardNumber:'',
            bankName:'',
            bankBranch:'',
            productId: '',
            total: '',
            email: ''
        })
        
    }

   


    render() {
        console.log(this.props.match.params._id);
        const { images } = this.props.image;
        const imageIDTarget = this.props.match.params._id
        const imageTarget = images.find((image) => {
            return image._id === imageIDTarget
        })
        
        
      
        
        // console.log(this.state.productId);

        const linkImage = process.env.PUBLIC_URL + `/storageimages/${imageTarget.originalImage}`

       
        const {errors} = this.state;

        return (
            <div className="container-fluid-order" style={{ maxHeight: "100%" }}>
                <div className="row">

                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="order-box1">
                            <h1>Checkout</h1>
                            <div className="card-body">
                                <form noValidate className="form-checkout" onSubmit = {this.onSubmit}>
                                    <h2>Billing Information</h2>
                                    <div className = "form-group">
                                        <input  className={classnames('form-control form-control-lg', {'is-invalid':errors.companyName})} type="text" placeholder="Organization or Company" name="companyName" value={this.state.companyName} onChange={this.onChange} />
                                        {errors.companyName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.companyName}</div>)}
                                    </div>
                                    <div className = "form-group">
                                        <input type = "text"  className={classnames('form-control form-control-lg', {'is-invalid':errors.address})} placeholder="Address" name="address" value={this.state.address} onChange={this.onChange}/>
                                        {errors.address && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.address}</div>)}
                                    </div>
                                    <div className = "form-group">
                                        <input  type="text"  className={classnames('form-control form-control-lg', {'is-invalid':errors.companyPhone})} placeholder="Company Phone" name="companyPhone" value={this.state.companyPhone} onChange={this.onChange}/>
                                        { errors.companyPhone && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.companyPhone}</div>)}
                                    </div>
                                    <div className = "form-group">
                                        <input type="text" className={classnames('form-control form-control-lg', {'is-invalid':errors.email})} placeholder="Email" name="email" value={this.state.email} onChange={this.onChange} />
                                        { errors.email && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.email}</div>)}
                                    </div>
                                    
                                    <h2>Bank Information</h2> 
                                    <div className = "form-group">
                                        <input  
                                            className={classnames('form-control form-control-lg', {'is-invalid':errors.accountHolder})}
                                            type="text" 
                                            placeholder="Account holder" 
                                            name="accountHolder"
                                            value={this.state.accountHolder} 
                                            onChange={this.onChange} 
                                        />
                                        {errors.accountHolder && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.accountHolder}</div>)}
                                    </div>

                                    <div className = "form-group">
                                        <input  
                                            className={classnames('form-control form-control-lg', {'is-invalid':errors.accountHolder})}
                                            type="text" 
                                            placeholder="Card number" 
                                            name="cardNumber"
                                            value={this.state.cardNumber} 
                                            onChange={this.onChange} 
                                        />
                                        {errors.cardNumber && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.cardNumber}</div>)}
                                    </div>

                                    <div className = "form-group">
                                        <input  
                                            className={classnames('form-control form-control-lg', {'is-invalid':errors.accountHolder})}
                                            type="text" 
                                            placeholder="Bank Name" 
                                            name="bankName"
                                            value={this.state.bankName} 
                                            onChange={this.onChange} 
                                        />
                                        {errors.bankName && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.bankName}</div>)}
                                    </div>

                                    <div className = "form-group">
                                        <input  
                                            className={classnames('form-control form-control-lg', {'is-invalid':errors.accountHolder})}
                                            type="text" 
                                            placeholder="Bank Branch" 
                                            name="bankBranch"
                                            value={this.state.bankBranch} 
                                            onChange={this.onChange} 
                                        />
                                        {errors.bankBranch && (<div className="invalid-feedback" style={{marginLeft:50}}>{errors.bankBranch}</div>)}
                                    </div>

                                    
                                    
                                    <div className="total">
                                        <h2>Product ID</h2>
                                        <b  >{imageTarget.imageID}</b>

                                        <h2  >Total</h2>
                                        <b  >{imageTarget.price} USD</b>
                                        <b style={{fontSize:"10pt"}}><p>I have read and accept our <Link to="#">Website Terms</Link>, <Link to="#">Privacy Policy</Link>, and <Link to="#">Licensing Terms.</Link> </p></b>
                                        <button type = "submit" className = "btn btn-info btn-block mt-4">Submit</button>
                                       
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
                            <img src={linkImage} alt={imageTarget.name} style={{height:"180%",width:"180%"}}></img>
                        </div>
                        <p style={{fontSize:"10pt"}}>1 PickFrame Credit</p>
                    </div>
                    

                    
                    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <b>{imageTarget.price} USD</b>
                    </div>
                    
                   
                    </div>
                    <span style={{paddingRight:"50px",paddingLeft:"18px",fontSize:"20pt"}}>Total</span>
                    <span style={{textAlign:"right",fontWeight:"bold",fontSize:"20pt"}}>{imageTarget.price} USD</span>
                    
                    </div>

                        
                    </div>
                    

                </div>



            </div>
        );
    }
}

OrdersPage.propTypes = {
    addOrders: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    // getImage: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors,
    image: state.image
})

export default connect(mapStateToProps, {addOrders})(OrdersPage);