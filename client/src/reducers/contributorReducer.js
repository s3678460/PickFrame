import { GET_CONTRIBUTORS } from "../actions/types";
import { GET_CONTRIBUTOR } from "../actions/types";
import { DELETE_ORDER } from "../actions/types";
import { ADD_ORDER } from "../actions/types";
import { UPDATE_ORDER } from "../actions/types";

const initialState = {
  contributors: [],
  contributor: {}
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTRIBUTORS:
      return {
        ...state,
        contributors: action.payload
      };
    case GET_CONTRIBUTOR:
      return {
        ...state,
        contributor: action.payload
      };
    // case DELETE_ORDER:
    //   return {
    //     ...state,
    //     orders: state.orders.filter(order => order._id !== action.payload)
    //   };
    // case ADD_ORDER:
    //   return {
    //     ...state,
    //     orders: [action.payload, ...state.orders]
    //   };
    // case UPDATE_ORDER:
    //   return {
    //     ...state,
    //     orders: state.orders.map(order =>
    //       order._id === action.payload._id ? (order = action.payload) : order
    //     )
    //   };
    default:
      return state;
  }
}
