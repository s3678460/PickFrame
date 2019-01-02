import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import bgImage from "../../images/salebg.jpg"

import { Table } from 'reactstrap';
import { Animation } from "mdbreact"

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
    
        var tableImages = saleHistories.map(image =>{
            return(
                <tr>
                    <th scope="row">{image.imageID}</th>
                    <td>{image.name}</td>
                    <td>{image.category}</td>
                    <td>{image.price}</td>
                    <td>{image.companyName}</td>
                    <td>{image.orderDate}</td>
                </tr>
            )
        })

        return (
            <div  className="pt-5 pb-5"
                    style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} >
                <Animation type="fadeIn">
                    {!errors.nosale?
                        (
                            <div className="container">
                                <Table dark striped bordered size="sm" hover responsive>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>ImageName</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Buyer</th>
                                            <th>OrderDate</th>
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {tableImages}
                                    </tbody>
                                </Table>
                            </div>
                        
                        )
                        : (
                            <div style={{ paddingTop: 100, paddingBottom: 100 }}>
                                <h1 className="text-center text-white">
                                    {errors.nosale ? errors.nosale : ""}
                                </h1>
                            </div>
                        )
                    }
                </Animation>
                
            </div>

            
        );
    }
}

SalesHistory.propTypes = {
    getSaleHistory: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    
}


const mapStateToProps = state => {
    return {
        saleHistory: state.saleHistory,
        errors: state.errors
    }
}

export default connect(mapStateToProps, { getSaleHistory})(SalesHistory);