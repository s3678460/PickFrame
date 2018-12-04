import {
  GET_CONTRIBUTORS,
  DELETE_ORDER,
  ADD_ORDER,
  GET_CONTRIBUTOR,
  UPDATE_CONTRIBUTOR
} from "./types";
import axios from "axios";

export const getContributors = () => async dispatch => {
  const res = await axios.get("http://localhost:5000/api/users");
  dispatch({
    type: GET_CONTRIBUTORS,
    payload: res.data
  });
};

export const getContributor = _id => async dispatch => {
  const res = await axios.get(`http://localhost:5000/api/users/${_id}`);
  dispatch({
    type: GET_CONTRIBUTOR,
    payload: res.data
  });
};

export const updateContributor = contributor => async dispatch => {
  const res = await axios.put(
    `http://localhost:5000/api/users/${contributor._id}`,
    contributor
  );
  dispatch({
    type: UPDATE_CONTRIBUTOR,
    payload: res.data
  });
};
