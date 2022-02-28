import React from 'react'
import './Header.css'
import Rate from '../Rate'

const Header = ({ setSearchTitle, setSearchRate, searchRate }) => {
  return (
      <div className="search-container">
          <input
              type="text"
              placeholder="Type movie name to search"
              onChange={(e) => setSearchTitle(e.target.value)}
          />
          <Rate rating={searchRate} setSearchRate={setSearchRate} />
      </div>
  )
}
export default Header