import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import contributorReducer from "./contributorReducer";
import imageReducer from "./imageReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loginReducer from "./loginReducer";
import contactsReducer from "./contactsReducer";

export default combineReducers({
  order: orderReducer,
  contributor: contributorReducer,
  image: imageReducer,
  auth: authReducer,
  errors: errorReducer,
  login: loginReducer,
  contact: contactsReducer,
});
