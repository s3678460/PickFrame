import axios from "axios";

export function login(data) {
  return dispatch => {
    return axios.post("http://localhost:5000/api/users", data);
  };
}
