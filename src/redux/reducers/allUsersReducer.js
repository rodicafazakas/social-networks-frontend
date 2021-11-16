import actionTypes from "../actions/actionTypes";

const allUsersReducer = (allUsers = [], action) => {
  let newAllUsers;

  switch (action.type) {
    case actionTypes.loadUsers:
      newAllUsers = [...action.allUsers];
      break;
    default:
      newAllUsers = [...allUsers];
  }

  return newAllUsers;
}

export default allUsersReducer;