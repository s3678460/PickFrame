import { GET_ORDERS } from "../actions/types";
import { DELETE_ORDER } from "../actions/types";
import { ADD_ORDER } from "../actions/types";

const initialState = {
  orders: [
    {
      _id: "123",
      companyName: "RMIT Vietnam",
      address: "702 Nguyen Van Linh",
      companyPhone: "123456",
      accountHolder: "accountHolder",
      cardNumber: "cardNumber",
      bankName: "bankName",
      bankBranch: "bankBranch",
      email: "email",
      productId: "productId",
      total: 550000,
      status: "Completed"
    }
  ]
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state
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
    default:
      return state;
  }
}
