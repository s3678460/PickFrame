import {
  GET_CONTRIBUTORS,
  DELETE_ORDER,
  ADD_ORDER,
  GET_CONTRIBUTOR,
  UPDATE_ORDER
} from "./types";
import axios from "axios";

export const getContributors = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/api/users");
  dispatch({
    type: GET_CONTRIBUTORS,
    payload: res.data
  });
};

export const getContributor = _id => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/users/${_id}`);
  dispatch({
    type: GET_CONTRIBUTOR,
    payload: res.data
  });
};

//   export const deleteOrder = _id => async dispatch => {
//     await axios.delete(`http://localhost:5000/api/orders/${_id}`);
//     dispatch({
//       type: DELETE_ORDER,
//       payload: _id
//     });
//   };

//   export const addOrders = order => {
//     return {
//       type: ADD_ORDER,
//       payload: order
//     };
//   };

//   export const updateOrder = order => async dispatch => {
//     const res = await axios.put(
//       `http://localhost:5000/api/orders/${order._id}`,
//       order
//     );
//     dispatch({
//       type: UPDATE_ORDER,
//       payload: res.data
//     });
//   };
