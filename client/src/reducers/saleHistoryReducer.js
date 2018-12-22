import { GET_SALEHISTORY } from "../actions/types";
import { ADD_SALEHISTORY } from "../actions/types";

const initialState = {
    saleHistories: [],
    saleHistory: {}
  };

  export default function(state = initialState, action) {
    switch (action.type) {
        case ADD_SALEHISTORY:
            return {
            ...state,
            saleHistories: [action.payload, ...state.saleHistories]
        };
        case GET_SALEHISTORY:
            return {
                ...state,
                saleHistories: action.payload
        }
        default:
        return state;
    }
  }