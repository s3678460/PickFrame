import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import contributorReducer from "./contributorReducer";
import imageReducer from "./imageReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  order: orderReducer,
  contributor: contributorReducer,
  image: imageReducer,
  auth: authReducer,
  errors: errorReducer,
  login: loginReducer
});
