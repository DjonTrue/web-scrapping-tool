import { Dispatch } from 'redux';
import axios from "axios";
import { gamesActions, gamesActionTypes } from '../../types/games';

export const fetchGames = () => async (dispatch: Dispatch<gamesActions>) => {
  dispatch({type: gamesActionTypes.GET_ALL_GAMES});
  axios.get("https://www.freetogame.com/api/games")
    .then((data) => {
      dispatch({
        type: gamesActionTypes.GET_ALL_GAMES_SUCCESS,
        payload: data.data,
      });
    })
    .catch(error => {
      dispatch({
        type: gamesActionTypes.GET_ALL_GAMES_ERROR,
        payload: `Произошла ошибка ${error}` 
      })
  })
};
