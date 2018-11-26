import { GET_ORDERS, DELETE_ORDER, ADD_ORDER } from "./types";
export const getOrders = () => {
  return {
    type: GET_ORDERS
  };
};

export const deleteOrder = _id => {
  return {
    type: DELETE_ORDER,
    payload: _id
  };
};

export const addOrders = order => {
  return {
    type: ADD_ORDER,
    payload: order
  };
};
