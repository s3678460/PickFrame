import {
  GET_ORDERS,
  DELETE_ORDER,
  ADD_ORDER,
  GET_ORDER,
  UPDATE_ORDER,
  GET_ERRORS
} from "./types";
import axios from "axios";

export const getOrders = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/api/orders");
  dispatch({
    type: GET_ORDERS,
    payload: res.data
  });
};

export const getOrder = _id => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/orders/${_id}`);
  dispatch({
    type: GET_ORDER,
    payload: res.data
  });
};

export const deleteOrder = _id => async dispatch => {
  await axios.delete(`http://localhost:5000/api/orders/${_id}`);
  dispatch({
    type: DELETE_ORDER,
    payload: _id
  });
};

export const addOrders = orderData => dispatch => {
  axios
    .post('/api/orders', orderData)
    .then(
      res => 
        dispatch({
          type: ADD_ORDER,
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

export const updateOrder = order => async dispatch => {
  const res = await axios.put(
    `http://localhost:5000/api/orders/${order._id}`,
    order
  );
  dispatch({
    type: UPDATE_ORDER,
    payload: res.data
  });
};
