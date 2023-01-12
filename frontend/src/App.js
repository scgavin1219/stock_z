import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import PageNotFound from './components/PageNotFound';
import Navigation from "./components/Navigation";
import LoginNavigation from './components/LoginNavigation';
import Footer from './components/Footer';
import Splash from './components/Splash';
import './index.css'
import ListingsIndex from './components/ListingsIndex';
import ListingShow from './components/ListingShow';
import ReviewForm from './components/ReviewsIndex/ReviewForm';
import ReviewsIndex from './components/ReviewsIndex';
import Purchase from './components/Purchase';
import Checkout from './components/Checkout';
import FavoritesIndex from './components/Favorites/FavoriteIndex';
import SearchIndex from './components/SearchIndex/SearchIndex';
import WatchesIndex from './components/Categories/WatchesIndex';
import ShoesIndex from './components/Categories/ShoesIndex';
import ElectronicsIndex from './components/Categories/ElectronicsIndex';
import CardsIndex from './components/Categories/TradingCardsIndex';
import About from './components/About';



function App() {
  return (
    <>
        <Switch>
          <Route path="/login" exact >
            <LoginNavigation />
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <LoginNavigation />
            <SignupFormPage />
          </Route>
          <Route path="/listings" exact>
            <Navigation />
            <ListingsIndex />
          </Route>
          <Route path="/checkout" exact>
            <Navigation />
            <Purchase />
          </Route>
          <Route path="/review/:listingId" exact>
            <Navigation />
            <ReviewForm />
          </Route>
          <Route path="/listings/:listingId" exact>
            <Navigation />
            <ListingShow />
            <ReviewsIndex />
          </Route>
          <Route path="/thanks" exact>
            <Navigation />
            <Checkout />
          </Route>
          <Route path ="/favorites" exact>
            <Navigation />
            <FavoritesIndex />
          </Route>
          <Route path="/watches" exact>
            <Navigation/>
            <WatchesIndex />
          </Route>
          <Route path="/sneakers" exact>
            <Navigation />
            <ShoesIndex />
          </Route>
          <Route path="/electronics" exact>
            <Navigation />
            <ElectronicsIndex />
          </Route>
          <Route path="/tradingcards" exact>
            <Navigation />
            <CardsIndex />
          </Route>
          <Route path="/search/:query" exact>
            <Navigation/>
            <SearchIndex />
          </Route>
          <Route path="/about" exact>
            <Navigation />
            <About />
          </Route>
          <Route path="/error" exact>
            <LoginNavigation />
            <PageNotFound />
          </Route>
          <Route path="/" exact>
            <Navigation />
            <Splash />
            <ListingsIndex />
          </Route>
          <Redirect to="/error"/>
        </Switch>
        <Footer/>
     
    </>

  );
}

export default App;
