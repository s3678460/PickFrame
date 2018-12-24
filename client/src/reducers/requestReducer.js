import { GET_REQUESTS, REJECT_IMAGE, APPROVE_IMAGE } from "./../actions/types";

const initialState = {
  requests: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload
      };
    case REJECT_IMAGE:
      return {
        ...state,
        requests: state.requests.filter(
          request => request._id !== action.payload
        )
      };
    case APPROVE_IMAGE:
      return {
        ...state,
        requests: state.requests.filter(
          request => request._id !== action.payload._id
        )
      };
    default:
      return state;
  }
}
