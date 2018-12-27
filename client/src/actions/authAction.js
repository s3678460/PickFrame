
import axios from 'axios';
import setAuthToken from '../../src/utils/setAuthToken'
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

//Register Users

export const registerUser = (userData, history) => dispatch => {

    axios.post('/api/users/register', userData)
        .then(res => history.push('/postregister'))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );

}

//Login - Get user token

export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            //Save to local storage 
            const { token } = res.data;
            //Set token to local storage
            localStorage.setItem('jwtToken', token);
            //Set token to auth header
            setAuthToken(token);
            //Decode token to get user data
            const decoded = jwt_decode(token);
            //Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );
};

//Set current user /logged in user

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }

}


//Set log out 
export const logoutUser = () => dispatch => {
    //Remove the token from local storage
    localStorage.removeItem('jwtToken');
    //Remove the auth header for next request
    setAuthToken(false);
    //Set current user to empty object which will set isAuthenticated to false
    dispatch(setCurrentUser({}));


}




export const editUser = (updateProfile, id,history) => dispatch => {
    axios
        .put(`/api/users/${id}`, updateProfile)
        
        .then(res => {
            //Remove the token from local storage
            localStorage.removeItem('jwtToken');
            //Remove the auth header for next request
            setAuthToken(false);
            //Set current user to empty object which will set isAuthenticated to false
            dispatch(setCurrentUser({}));
        })
        .then(res => history.push('/postedit'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );

}


export const editUserPassword = (updateProfilePassword, id,history) => dispatch => {
    axios
        .put(`/api/users/password/${id}`, updateProfilePassword)
        
        .then(res => {
            //Remove the token from local storage
            localStorage.removeItem('jwtToken');
            //Remove the auth header for next request
            setAuthToken(false);
            //Set current user to empty object which will set isAuthenticated to false
            dispatch(setCurrentUser({}));
        })
        .then(res => history.push('/postedit'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );

}

export const userVerification =(secretToken,history)=> dispatch=>{
    axios.post('/api/users/verify', secretToken)
    .then(res=>history.push('/login'))
    .catch(err=>dispatch({
        type:GET_ERRORS,
        payload:err.response.data
    }))
}

