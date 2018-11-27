import { GET_ORDERS } from "../actions/types";
import { GET_ORDER } from "../actions/types";
import { DELETE_ORDER } from "../actions/types";
import { ADD_ORDER } from "../actions/types";
import { UPDATE_ORDER } from "../actions/types";

const initialState = {
  orders: [],
  order: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    case GET_ORDER:
      return {
        ...state,
        order: action.payload
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(order => order._id !== action.payload)
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [action.payload, ...state.orders]
      };
    case UPDATE_ORDER:
      return {
        ...state,
        orders: state.orders.map(order =>
          order._id === action.payload._id ? (order = action.payload) : order
        )
      };
    default:
      return state;
  }
}
