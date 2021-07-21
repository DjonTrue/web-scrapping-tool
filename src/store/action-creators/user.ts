import { Dispatch } from "redux";
import { userActionTypes, UserAction } from "./../../types/user";
export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: userActionTypes.FETCH_USERS });
    } catch (error) {
      dispatch({ type: userActionTypes.FETCH_USERS_ERROR, payload: `Произошла ошибка: ${error}` });
    }
  };
};
