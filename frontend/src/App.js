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
          {/* <Route path="/tradingcards" exact>
            <Navigation />
            <CardIndex /> */}
          {/* </Route> */}
          <Route path="/listings/:listingId" exact>
            <Navigation />
            <ListingShow />
            <ReviewsIndex />
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
