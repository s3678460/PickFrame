import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import contributorReducer from "./contributorReducer";
import imageReducer from "./imageReducer";
import authReducer from "./authReducer"
import errorReducer from "./errorReducer";

export default combineReducers({
  order: orderReducer,
  contributor: contributorReducer,
  image: imageReducer,
  auth: authReducer,
  errors: errorReducer
});
