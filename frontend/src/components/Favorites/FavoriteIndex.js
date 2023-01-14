import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FavoriteIndexItem from './FavoritesIndexItem'
import './Favorites.css'
import { fetchFavorites, getFavorites } from '../../store/favorite'
import { useHistory } from 'react-router-dom'


const  FavoritesIndex =() => {
    const dispatch = useDispatch();
    const favorites = useSelector(getFavorites)
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    useEffect(() => { 
      dispatch(fetchFavorites())
    }, [dispatch])

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[]) 

    const backTo = () => { 
      history.push("/login")
    }

  return (
    <div className='favorites-container' id="favorites-container">
      { (sessionUser) ? 
      <>
      <div className='favorites-header'>
        <h1>{sessionUser.username}'s Favorites</h1>
      </div>
      <ul className='purchase-item-container'>
          {favorites.map((favorite) => <FavoriteIndexItem favorite={favorite} key={favorite.id} />)}
      </ul>
      </>
      :
      <div className='backtofavorites'>
        <h2 id="backtofavorites">Please sign in to Favorites</h2>
        <button id="backbutton" onClick={backTo}>Sign In</button>
      </div> }
    </div>
  )
}

export default FavoritesIndex