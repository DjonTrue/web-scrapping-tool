export enum gamesActionTypes {
  GET_ALL_GAMES = "GET_ALL_GAMES",
  GET_ALL_GAMES_SUCCESS = "GET_ALL_GAMES_SUCCESS",
  GET_ALL_GAMES_ERROR = "GET_ALL_GAMES_ERROR",
}

export interface gamesState {
  games: any[];
  loading: boolean;
  error: null | string;
}

export interface getAllGames {
  type: gamesActionTypes.GET_ALL_GAMES
}

export interface getAllGamesSuccess {
  type: gamesActionTypes.GET_ALL_GAMES_SUCCESS
  payload: any[] 
}

export interface getAllGamesError {
  type: gamesActionTypes.GET_ALL_GAMES_ERROR
  payload: null | string
}

export type gamesActions = getAllGames | getAllGamesSuccess | getAllGamesError;