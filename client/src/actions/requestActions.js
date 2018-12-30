import { GET_REQUESTS, REJECT_IMAGE, APPROVE_IMAGE } from "./../actions/types";
import axios from "axios";

export const getRequests = () => async dispatch => {
  const res = await axios.get("/api/images/admin/requests");
  const cnt_24hours = countRequests(res.data, 2);
  const cnt_3days = countRequests(res.data, 4);
  const cnt_1week = countRequests(res.data, 8);
  const cnt_1month = countRequests(res.data, 31);
  dispatch({
    type: GET_REQUESTS,
    payload: res.data,
    cnt_24hours,
    cnt_3days,
    cnt_1week,
    cnt_1month
  });
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

const countRequests = (requests, period) => {
  const end = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
  const start = new Date(new Date().getTime() - period * 24 * 60 * 60 * 1000);
  let cnt = 0;
  requests.forEach(request => {
    if (
      new Date(request.uploadDate) >= start &&
      new Date(request.uploadDate) <= end
    ) {
      cnt++;
    }
  });
  return cnt;
};
