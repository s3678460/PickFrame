import { GET_REQUESTS, REJECT_IMAGE, APPROVE_IMAGE } from "./../actions/types";
import axios from "axios";

export const getRequests = () => dispatch => {
  axios.get("/api/images/admin/requests").then(res =>
    dispatch({
      type: GET_REQUESTS,
      payload: res.data
    })
  );
};

export const rejectImage = (_id, content) => async dispatch => {
  await axios.delete(
    `http://localhost:5000/api/images/admin/rejectimage/${_id}`
  );
  dispatch({
    type: REJECT_IMAGE,
    payload: _id
  });
  await axios.post("/api/form", {
    ...content
  });
};

export const approveImage = (request, content) => async dispatch => {
  const res = await axios.put(
    `http://localhost:5000/api/images/admin/approveimage/${request._id}`,
    request
  );
  dispatch({
    type: APPROVE_IMAGE,
    payload: res.data
  });
  await axios.post("/api/form", {
    ...content
  });
};
