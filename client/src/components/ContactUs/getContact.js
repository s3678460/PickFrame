import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContacts } from "../../actions/contactActions";
import { Table, Button } from 'reactstrap';
import bgImage from "../../images/android-wallpaper-4k-4k-abstract-download-free-stunning-hd-backgrounds-for.jpg"


import "./getContact.css";

class getContact extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
    render() {
      const { contacts } = this.props.contact;
      
        return (
          <div>
            
            <div className="pt-5 pb-5"
                    style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}>

              <div className = "container">
                <h1 className="title">
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
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
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
