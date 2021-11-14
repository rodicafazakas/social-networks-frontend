import { loadUsersAction } from "../actions/actionCreators";

const api = "https://social-network-rodicaf.herokuapp.com";

export const loadAllUsersThunk = () => async (dispatch) => {
 const {token} = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE));

 const response = await fetch(`${api}/users`, {
   headers: {"Authorization": "Bearer "+token}
 });

 const allUsers = await response.json();
 dispatch(loadUsersAction(allUsers));
}