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
  const res = await axios.get("/api/orders");
  const cnt_24hours = countOrders(res.data, 2);
  const cnt_3days = countOrders(res.data, 4);
  const cnt_1week = countOrders(res.data, 8);
  const cnt_1month = countOrders(res.data, 31);
  dispatch({
    type: GET_ORDERS,
    payload: res.data,
    cnt_24hours,
    cnt_3days,
    cnt_1week,
    cnt_1month
  });
};

export const getOrder = _id => async dispatch => {
  const res = await axios.get(`api/orders/${_id}`);
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

export const addOrders = (orderData, history) => dispatch => {
  axios
    .post("/api/orders", orderData)
    .then(res =>
      dispatch({
        type: ADD_ORDER,
        payload: res.data
      })
    )
    .then(res => history.push("/"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
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

const countOrders = (orders, period) => {
  const end = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
  const start = new Date(new Date().getTime() - period * 24 * 60 * 60 * 1000);
  let cnt = 0;
  orders.forEach(order => {
    if (new Date(order.date) >= start && new Date(order.date) <= end) {
      cnt++;
    }
  });
  return cnt;
};
