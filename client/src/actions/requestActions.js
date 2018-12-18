import { GET_REQUESTS, REJECT_IMAGE } from "./../actions/types";
import axios from "axios";

export const getRequests = () => dispatch => {
  axios.get("/api/images/admin/requests").then(res =>
    dispatch({
      type: GET_REQUESTS,
      payload: res.data
    })
  );
};

export const deleteRequest = _id => async dispatch => {
  await axios.delete(`/api/admin/rejectimage/${_id}`);
  dispatch({
    type: REJECT_IMAGE,
    payload: _id
  });
};
