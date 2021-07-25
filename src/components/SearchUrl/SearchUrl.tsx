import React from 'react'

const SearchUrl: React.FC = () => {
  const getDate = () => {
    const currentDate = new Date()
    console.log(currentDate)
  }
  
  return (
    <div className="search-box">
      <input type="text" className="search-box__input" />
      <input type="submit" className="search-box__submit" value="Add link here" />
      <button onClick={getDate}></button>
    </div>
  )
}

export default SearchUrl
