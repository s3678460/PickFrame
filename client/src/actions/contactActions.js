import axios from 'axios';
import { GET_ERRORS,POST_CONTACTS,GET_CONTACTS, DELETE_CONTACT } from './types';

//posting contact

export const postContact = (contactInput) => dispatch=>{
    axios.post('/api/contacts',contactInput)
    .then(res=>dispatch({
        type: POST_CONTACTS,
        payload: res.data
    }))
    .catch(err=>dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
}

export const getContacts = () => async dispatch => {
    const res = await axios.get("/api/contacts");
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  };


  export const deleteContact = _id => async dispatch => {
    await axios.delete(`/api/contacts/${_id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: _id
    });
  };