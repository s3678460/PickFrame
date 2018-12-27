import {
   GET_SALEHISTORY, ADD_SALEHISTORY, GET_ERRORS
  } from "./types";
  import axios from "axios";

  export const addSaleHistory = (saleHistoryData) => dispatch => {
    axios
      .post('/api/saleHistory', saleHistoryData)
      .then(
        res => 
          dispatch({
            type: ADD_SALEHISTORY,
            payload: res.data
          })
      )
      
      
      .catch(err => 
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      )
  };

  export const getSaleHistory = (id) => dispatch => {
    axios
        .get(`/api/saleHistory/seller/${id}`)
        .then(res => dispatch({
            type: GET_SALEHISTORY,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}  