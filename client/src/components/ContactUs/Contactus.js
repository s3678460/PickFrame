import React, { Component } from 'react';
import "./Contactus.css";
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { postContact } from '../../actions/contactActions'


class Contactus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
      errors: {}
    }
    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  }

onChange(e){
  this.setState({[e.target.name]:e.target.value})

}
onSubmit(e){
  e.preventDefault();

  const contactInput={
    name:this.state.name,
    email:this.state.email,
    phoneNumber:this.state.phoneNumber,
    message:this.state.message
  }
  this.props.postContact(contactInput)
  this.setState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '', 
  })

}
componentWillReceiveProps(nextProps){
  if(nextProps.errors){
    this.setState({ errors:nextProps.errors});
  }
}



  render() {
    const { errors } = this.state;
    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: "\n\n" }} />
        <div className="container1">
          <div className="map">
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAOcs5VtxODOq_ARsAZBy5GKemfnfWkYW8 &q=RMIT University Vietnam Saigon South Campus" width="100%" height="650px" frameBorder={0} style={{ border: 0 }} allowFullScreen />
          </div>
          <div className="contact-form">
            <h1 className="title">Contact Us</h1>
            <h2 className="subtitle">We are there to assist you.</h2>
            <form onSubmit={this.onSubmit}>
              <input
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.name
                })}
                type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.onChange} />
                  {errors.name && (<div className = 'invalid-feedback'>{errors.name}</div>)}
          

              <input
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.email
                })}
                type="text" name="email" placeholder="E-Mail" value={this.state.email} onChange={this.onChange} />
                  {errors.email && (<div className = 'invalid-feedback'>{errors.email}</div>)}

              <input
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.phoneNumber
                })}
                type="text" name="phoneNumber" placeholder="Phone Number" value={this.state.phoneNumber} onChange={this.onChange} />
                  {errors.phoneNumber && (<div className = 'invalid-feedback'>{errors.phoneNumber}</div>)}

              <textarea
                className={classnames('form-control form-control-lg', {
                  'is-invalid': errors.message
                })}
                type="text" name="message" placeholder="Your Message" row = '5' value={this.state.message} onChange={this.onChange} />
                  {errors.message && (<div className = 'invalid-feedback'>{errors.message}</div>)}

              <button className="btn-send" type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
Contactus.PropTypes = {
  errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
  errors: state.errors

})

export default connect(mapStateToProps, { postContact })(Contactus);