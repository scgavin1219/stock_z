import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListings, fetchListings } from '../../store/listings'
import ListingsIndexItem from './ListingsIndexItem'
import './ListingsIndex.css'


const  ListingsIndex =() => {
    const dispatch = useDispatch();
    const listings = useSelector(getListings)
    console.log(listings)

    useEffect(() => {
        dispatch(fetchListings())
    }, [])

  return (
    <div className='listings-container'>
        {listings.map((listing, idx) => <ListingsIndexItem listing={listing} key={idx} />)}
    </div>
  )
}

export default ListingsIndex