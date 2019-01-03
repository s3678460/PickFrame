import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts, deleteContact } from "../../actions/contactActions";
import { Table, Button } from 'reactstrap';


import "./getContact.css";

class getContact extends Component {
  
  

  componentDidMount() {
    this.props.getContacts();
  }
  onDelete = (_id) => {
    
    this.props.deleteContact(_id);
  }
    render() {
      const { contacts } = this.props.contact;
      
        return (
          
              <div className = "container">
                <h1 className="titlecon">
                  <br/>Contact Post
                </h1>
                <div>
                  <Table dark striped bordered size="sm" hover responsive>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>E-mail</th>
                        <th>Phone Number</th>
                        <th>Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map(contact => (
                        <tr key={contact._id}>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.phoneNumber}</td>
                          <td>{contact.message}</td>
                           <td>
                            <Button color="danger" size="sm" onClick={() => this.onDelete(contact._id)}>Delete</Button>
                          </td> 
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>  

        );
    }
}
getContact.PropTypes = {
  errors: PropTypes.object.isRequired,
  contact: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
  errors: state.errors,
  contact: state.contact

})

export default connect(mapStateToProps, { getContacts, deleteContact })(getContact);
