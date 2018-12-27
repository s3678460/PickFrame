import axios from 'axios';
import { GET_ERRORS,POST_CONTACTS,GET_CONTACTS } from './types';

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
    const res = await axios.get("http://localhost:5000/api/contacts");
    dispatch({
      type: GET_CONTACTS,
      payload: res.data
    });
  };