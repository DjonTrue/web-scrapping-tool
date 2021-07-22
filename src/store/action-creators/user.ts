import axios from "axios";
import { Dispatch } from "redux";
import { userActionTypes, UserAction } from "./../../types/user";
export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: userActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setTimeout(() => {
        dispatch({
          type: userActionTypes.FETCH_USERS_SUCCESS,
          payload: response.data,
        });
      }, 3000);
    } catch (error) {
      dispatch({
        type: userActionTypes.FETCH_USERS_ERROR,
        payload: `Произошла ошибка: ${error}`,
      });
    }
  };
};
