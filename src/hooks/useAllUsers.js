import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllUsersThunk } from "../redux/thunks/allUsersThunk";


const useAllUsers = () => {
  const allUsers = useSelector( (store) => store.allUsers);
  const dispatch = useDispatch();

  const loadAllUsers = useCallback( ()=> {
    dispatch(loadAllUsersThunk());
  },[dispatch]);


  return {
    allUsers,
    loadAllUsers,
  }

};

export default useAllUsers;