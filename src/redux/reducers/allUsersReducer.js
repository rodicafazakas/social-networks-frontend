import actionTypes from "../actions/actionTypes";

const allUsersReducer = (action, allUsers = []) => {
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