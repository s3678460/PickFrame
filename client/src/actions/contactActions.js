import axios from 'axios';
import { GET_ERRORS,POST_CONTACTS } from './types';

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