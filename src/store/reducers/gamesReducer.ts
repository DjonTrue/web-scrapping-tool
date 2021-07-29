import { gamesState, gamesActions, gamesActionTypes } from "../../types/games"

const initialState: gamesState = {
  games: [],
  loading: false,
  error: null,
}

export const gamesReducer = (state = initialState, action: gamesActions): gamesState => {
  switch (action.type) {
    case gamesActionTypes.GET_ALL_GAMES:
      return {
        games: [],
        loading: true,
        error: null
      }
    case gamesActionTypes.GET_ALL_GAMES_SUCCESS:
      return {
        games: action.payload,
        loading: false,
        error: null,
      }
    case gamesActionTypes.GET_ALL_GAMES_ERROR:
      return {
        games: [],
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}