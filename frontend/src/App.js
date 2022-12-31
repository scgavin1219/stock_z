import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import PageNotFound from './components/PageNotFound';
import Navigation from "./components/Navigation";
import LoginNavigation from './components/LoginNavigation';

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
          <Route path="/error" exact>
            <LoginNavigation />
            <PageNotFound />
          </Route>
          <Route path="/" exact>
            <Navigation />
            {/* route to splash page */}
          </Route>
          <Redirect to="/error"/>
        </Switch>
     
    </>

  );
}

export default App;
