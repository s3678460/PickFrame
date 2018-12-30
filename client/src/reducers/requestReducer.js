import { GET_REQUESTS, REJECT_IMAGE, APPROVE_IMAGE } from "./../actions/types";

const initialState = {
  requests: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REQUESTS:
      return {
        ...state,
        requests: action.payload,
        cnt_1week: action.cnt_1week,
        cnt_1month: action.cnt_1month,
        cnt_3days: action.cnt_3days,
        cnt_24hours: action.cnt_24hours
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
