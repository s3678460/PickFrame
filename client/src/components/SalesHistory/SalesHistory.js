import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import bgImage from "../../images/demo4.jpg"





// import classnames from "classnames";
import { getUserImages} from "../../actions/imageActions";
import {getOrders} from "../../actions/orderActions";



class SalesHistory extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

   componentDidMount = () => {
     this.props.getOrders();
     this.props.getUserImages()
   }
   
   checkOrder = (id) => {
    const {orders} = this.props.order;
    var listItems = orders.map((order) => {
        return order.productId
    });
    if(listItems.indexOf(id) != -1){
        return true
    } else { 
        return false
    }
   }

    render() {
        const {orders} = this.props.order;
        const {images} = this.props.image;
    //     console.log(images);
    //     console.log(orders);
    //    var listItems = orders.map((image) => {
    //         return image.productId
    //     });
       
    //   console.log(listItems)
    //   console.log(listItems.indexOf("78687678876"))
    //   console.log(this.checkOrder(listItems[0]))

    

        var listImages = images.map((image, index) => {
            if(this.checkOrder(image._id)){
            return (
                <div key={index} className="row pt-4">
                    <div className="col-12 hoverable" style={{ backgroundColor: "white" }}>
                        <div className="row">
                            <div className="col-6">
                                <div style={{ padding: "12px 12px 12px 0px" }}>
                                    <img style={{ maxHeight: "100%", maxWidth: "100%" }} src={process.env.PUBLIC_URL + `/storageimages/${image.originalImage}`} className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ paddingTop: "12px" }}>
                                    <h2 className="h2-responsive">{image.name}</h2>
                                    <dl className="row">
                                        <dt className="col-sm-3">ID</dt>
                                        <dd className="col-sm-9">{image.imageID}</dd>
                                        <dt className="col-sm-3">Size</dt>
                                        <dd className="col-sm-9">{image.size.width}x{image.size.height}</dd>
                                        <dt className="col-sm-3">Category</dt>
                                        <dd className="col-sm-9">{image.category[0]}</dd>
                                        
                                        <dt className="col-sm-3">Price</dt>
                                        <dd className="col-sm-9">{image.price}$</dd>
                                    </dl>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        })
        

        return (
            <div  className="pt-5 pb-5"
                    style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

                <div className = 'container'> 
                    {listImages}
                </div>
                
            </div>
        );
    }
}

SalesHistory.propTypes = {
    getOrders: PropTypes.func.isRequired,
    getUserImages: PropTypes.func.isRequired,
    
    // getImage: PropTypes.func.isRequired
}


const mapStateToProps = state => {
    return {
        image: state.image,
        order: state.order
    }
}

export default connect(mapStateToProps, { getUserImages, getOrders})(SalesHistory);