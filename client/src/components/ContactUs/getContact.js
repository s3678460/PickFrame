import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts } from "../../actions/contactActions";



import "./getContact.css";

class getContact extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
    render() {
      const { contacts } = this.props.contact;
      
        return (
            <div>
            
            <h1 className="title"><br />Contact Post</h1>
            <div className="container">
              <div className="row col-md-6 col-md-offset-2 custyle">
                <table className="table table-striped custab">
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
                   
                    
                  </tr>
                ))}
              </tbody>
</table>
              </div>
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

export default connect(mapStateToProps, { getContacts })(getContact);
