import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import imageReducer from "./imageReducer"

export default combineReducers({
  order: orderReducer,
  image: imageReducer
});
