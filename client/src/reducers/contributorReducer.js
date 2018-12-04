import { GET_CONTRIBUTORS } from "../actions/types";
import { GET_CONTRIBUTOR } from "../actions/types";
import { DELETE_ORDER } from "../actions/types";
import { ADD_ORDER } from "../actions/types";
import { UPDATE_CONTRIBUTOR } from "../actions/types";

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
    case UPDATE_CONTRIBUTOR:
      return {
        contributor: action.payload,
        contributors: state.contributors.map(contributor =>
          contributor._id === action.payload._id
            ? (contributor = action.payload)
            : contributor
        )
      };
    default:
      return state;
  }
}
