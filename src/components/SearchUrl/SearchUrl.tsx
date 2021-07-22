import React from 'react'

const SearchUrl: React.FC = () => {
  return (
    <div className="search-box">
      <input type="text" className="search-box__input" />
      <input type="submit" className="search-box__submit" value="Add link here" />
    </div>
  )
}

export default SearchUrl
