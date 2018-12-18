import { GET_REQUESTS, REJECT_IMAGE } from "./../actions/types";
import axios from "axios";

export const getRequests = () => dispatch => {
  axios.get("http://localhost:5000/api/images/admin/requests").then(res =>
    dispatch({
      type: GET_REQUESTS,
      payload: res.data
    })
  );
};

export const deleteRequest = _id => async dispatch => {
  await axios.delete(`http://localhost:5000/api/admin/rejectimage/${_id}`);
  dispatch({
    type: REJECT_IMAGE,
    payload: _id
  });
};
