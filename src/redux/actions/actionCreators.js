import actionTypes from "./actionTypes";

export const userLoginAction = (user) => ({
  type: actionTypes.loginUser,
  user,
}); 

export const userLogoutAction = (user) => ({
  type: actionTypes.logoutUser,
  user,
});
