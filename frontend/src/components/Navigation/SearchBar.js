import React from 'react'
import { fetchSearchListings } from '../../store/listings'
import { useState } from 'react'


function SearchBar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [search, setSearch] = useState('')

    const handleChange = (e) => { 
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => { 
        e.preventDefault()
        fetchSearchListings(search)
        history.push(`/search/${search}`)
        //get or fetch search products
    }

  return (
    <div className="search-bar-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input className="search-field" type="search" placeholder="Search" onChange={handleChange} />
          <button className="search-button">
            
          </button>
        </form>
      </div>
  )
}

export default SearchBar