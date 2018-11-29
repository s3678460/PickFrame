import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import contributorReducer from "./contributorReducer";

export default combineReducers({
  order: orderReducer,
  contributor: contributorReducer
});
