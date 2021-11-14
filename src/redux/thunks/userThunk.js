import jwtDecode from "jwt-decode";
import { userLoginAction } from "../actions/actionCreators";

const api = "https://social-network-rodicaf.herokuapp.com";

export const loginUserThunk = (user) => async (dispatch) => {
  let result = null;
  const response = await fetch(`${api}/users/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  result = await response.json();
  
  if (response.status === 200) {
    const token = result.token;
    const user =  jwtDecode(token);
    dispatch(userLoginAction(user));
    localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE, JSON.stringify({token:token}));
  }
};