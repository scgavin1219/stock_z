import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import PageNotFound from './components/PageNotFound';
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/login" exact >
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          <Route path="/error" exact>
            <PageNotFound />
          </Route>
          <Route path="/" exact>
            {/* route to splash page */}
          </Route>
          <Redirect to="/error"/>
        </Switch>
     
    </>

  );
}

export default App;
