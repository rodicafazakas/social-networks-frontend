import actionTypes from "../actions/actionTypes";

const userReducer = (action, user={
  isAuthenticated: false,
  user: {},
}) => {
  let newUser;

  switch (action.type) {
    case actionTypes.loginUser:
      newUser = {
        isAuthenticated: true,
        user: action.user,
      };
      break;
    case actionTypes.logoutUser:
      newUser = {
        isAuthenticated: false,
        user: {},
      };
      break;
    default:
      newUser = user;
  }

  return newUser;
};

export default userReducer;