import {combineReducers} from "redux";
import allUsersReducer from "./allUsersReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  allUsers: allUsersReducer, 
});

export default rootReducer;