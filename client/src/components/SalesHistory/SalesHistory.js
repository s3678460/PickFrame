import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import bgImage from "../../images/demo4.jpg"





// import classnames from "classnames";
import { getUserImages} from "../../actions/imageActions";
import {getOrders} from "../../actions/orderActions";
import {getSaleHistory} from "../../actions/saleHistoryAction";



class SalesHistory extends Component {

    constructor(props){
        super(props);
        this.state = {
            errors: {}
        }
    }

   

   componentDidMount = () => {
       this.props.getSaleHistory(this.props.match.params._id);
   }
   


    render() {
        const {errors} = this.props;
        
        const {saleHistories} = this.props.saleHistory;
        // console.log(saleHistories);
    

    

        var listImages = saleHistories.map((image, index) => {
            
            return (
                <div key={index} className="row pt-4">
                    <div className="col-12 hoverable" style={{ backgroundColor: "white" }}>
                        <div className="row">
                            {/* <div className="col-6">
                                <div style={{ padding: "12px 12px 12px 0px" }}>
                                    <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={process.env.PUBLIC_URL + `/storageimages/${image.originalImage}`} className="img-fluid" />
                                </div>
                            </div> */}
                            <div className="col-12">
                                <div style={{ paddingTop: "12px" }}>
                                    <h2 className="h2-responsive">{image.name}</h2>
                                    <dl className="row">
                                        <dt className="col-sm-3">ID</dt>
                                        <dd className="col-sm-9">{image.imageID}</dd>
                                        
                                        <dt className="col-sm-3">Category</dt>
                                        <dd className="col-sm-9">{image.category[0]}</dd>
                                        
                                        <dt className="col-sm-3">Price</dt>
                                        <dd className="col-sm-9">{image.price}$</dd>

                                        <dt className="col-sm-3">Buyer</dt>
                                        <dd className="col-sm-9">{image.companyName}</dd>

                                        <dt className="col-sm-3">Order Date</dt>
                                        <dd className="col-sm-9">{image.orderDate}</dd>
                                    </dl>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            
        })
        

        return (
            <div  className="pt-5 pb-5"
                    style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} >

                {!errors.nosale
                        ? ""
                        : (<div style={{ paddingTop: 100, paddingBottom: 100 }}>
                            <h1 className="text-center text-white">{errors.nosale ? errors.nosale : ""}</h1>
                        </div>)
                }
                <div className = 'container'> 
                    {listImages}
                </div>
                
            </div>
        );
    }
}

SalesHistory.propTypes = {
    // getOrders: PropTypes.func.isRequired,
    // getUserImages: PropTypes.func.isRequired,
    getSaleHistory: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    
}


const mapStateToProps = state => {
    return {
        // image: state.image,
        // order: state.order,
        saleHistory: state.saleHistory,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { getSaleHistory})(SalesHistory);