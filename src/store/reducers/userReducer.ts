import { UserAction, userActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case userActionTypes.FETCH_USERS:
      return {
        users: [],
        loading: true,
        error: null,
      };
    case userActionTypes.FETCH_USERS_SUCCESS:
      return {
        users: action.payload,
        loading: false,
        error: null,
      };
    case userActionTypes.FETCH_USERS_ERROR:
      return {
        users: [],
        loading: false,
        error: null,
      };
    default:
      return state
  }
};
