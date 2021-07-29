import { userReducer } from './userReducer';
import { combineReducers } from "redux";
import { gamesReducer } from './gamesReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  games: gamesReducer,
})

export type RootState = ReturnType<typeof rootReducer>