import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIndexItem from './FavoritesIndexItem'
import './Favorites.css'
import { fetchFavorites, getFavorites } from '../../store/favorite'


const  FavoritesIndex =() => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavorites)
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => { 
      dispatch(fetchFavorites())
    }, [dispatch])

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[]) 

  return (
    <div className='favorites-container' id="favorites-container">
      <div className='favorites-header'>
        <h1>{sessionUser.username}'s Favorites</h1>
      </div>
      <ul className='purchase-item-container'>
          {favorites.map((favorite) => <FavoriteIndexItem favorite={favorite} key={favorite.id} />)}
      </ul>
    </div>
  )
}

export default FavoritesIndex