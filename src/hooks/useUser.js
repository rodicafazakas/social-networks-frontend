import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAction } from "../redux/actions/actionCreators";
import { loginUserThunk } from "../redux/thunks/userThunk";


const useUser = () => {

  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();

  const loginUser = useCallback( (user) => {
      dispatch(loginUserThunk(user));
    }, [dispatch]
  ) 

  const logoutUser = useCallback( () => {
      dispatch(userLogoutAction());
    }, [dispatch]
  );

  return {
    user, 
    loginUser,
    logoutUser, 
  }

};

export default useUser;