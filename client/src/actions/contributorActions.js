import {
  GET_CONTRIBUTORS,
  DELETE_ORDER,
  ADD_ORDER,
  GET_CONTRIBUTOR,
  UPDATE_CONTRIBUTOR
} from "./types";
import axios from "axios";

export const getContributors = () => async dispatch => {
  const res = await axios.get("/api/users");
  const cnt_24hours = countUsers(res.data, 2);
  const cnt_3days = countUsers(res.data, 4);
  const cnt_1week = countUsers(res.data, 8);
  const cnt_1month = countUsers(res.data, 31);
  dispatch({
    type: GET_CONTRIBUTORS,
    payload: res.data,
    cnt_24hours,
    cnt_3days,
    cnt_1week,
    cnt_1month
  });
};

export const getContributor = _id => async dispatch => {
  const res = await axios.get(`/api/users/${_id}`);
  dispatch({
    type: GET_CONTRIBUTOR,
    payload: res.data
  });
};

export const updateContributor = contributor => async dispatch => {
  const res = await axios.put(
    `/api/users/${contributor._id}`,
    contributor
  );
  dispatch({
    type: UPDATE_CONTRIBUTOR,
    payload: res.data
  });
};

const countUsers = (users, period) => {
  const end = new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000);
  const start = new Date(new Date().getTime() - period * 24 * 60 * 60 * 1000);
  let cnt = 0;
  users.forEach(user => {
    if (new Date(user.joinDate) >= start && new Date(user.joinDate) <= end) {
      cnt++;
    }
  });
  return cnt;
};
