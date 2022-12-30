import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import PageNotFound from './components/PageNotFound';
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      {/* <BrowserRouter> */}
        <Switch>
          <Route path="/login" exact >
            <LoginFormPage />
          </Route>
          <Route path="/signup" exact>
            <SignupFormPage />
          </Route>
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      {/* </BrowserRouter> */}
    </>

  );
}

export default App;
