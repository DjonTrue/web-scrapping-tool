import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypesSelector } from '../../hooks/useTypedSelector'
import { fetchGames } from '../../store/action-creators/gamesActions'

const GameContainer = () => {
  const dispatch = useDispatch()
  const { games, loading, error } = useTypesSelector(state => state.games)
  const [numberOfGamesOnPage, setNumberOfGamesOnPage] = useState(10)

  window.onscroll = paginateScroll;

  useEffect(() => {
    dispatch(fetchGames())
  }, [dispatch])

  function paginateScroll(event: any): void {
    let windowBottom = document.documentElement.getBoundingClientRect().bottom;

    if (windowBottom < document.documentElement.clientHeight + 100) {
      setNumberOfGamesOnPage(amount => amount + 10)
    }
  }




  return (
    <div>
      {games.map(game => game.id < numberOfGamesOnPage &&
        <div>
          <div> Title : {game.title}</div>
          <div> Developer : {game.developer}</div>
          <div> Freetogame profile : {game.game_url}</div>
          <div> Platform : {game.platform}</div>
          <div> Publisher : {game.publisher}</div>
          <div> Release date : {game.release_date}</div>
          <div> Genre : {game.genre}</div>
          <img src={game.thumbnail} alt="games-pic" />
        </div>
      )}
    </div>
  )
}

export default GameContainer

/*
developer: "Phoenix Labs, Iron Galaxy"
freetogame_profile_url: "https://www.freetogame.com/dauntless"
game_url: "https://www.freetogame.com/open/dauntless"
genre: "MMORPG"
id: 1
platform: "PC (Windows)"
publisher: "Phoenix Labs"
release_date: "2019-05-21"
short_description: "A free-to-play, co-op action RPG with gameplay similar to Monster Hunter."
thumbnail: "https://www.freetogame.com/g/1/thumbnail.jpg"
title: "Dau
*/

//https://www.freetogame.com/api-doc