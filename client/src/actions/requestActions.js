import { GET_REQUESTS } from "./../actions/types";
import axios from "axios";

export const getRequests = () => dispatch => {
  axios.get("http://localhost:5000/api/images/admin/requests").then(res =>
    dispatch({
      type: GET_REQUESTS,
      payload: res.data
    })
  );
};
