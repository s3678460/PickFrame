import { combineReducers } from "redux";
import orderReducer from "./orderReducer";
import contributorReducer from "./contributorReducer";
import imageReducer from "./imageReducer";

export default combineReducers({
  order: orderReducer,
  contributor: contributorReducer,
  image: imageReducer
});
