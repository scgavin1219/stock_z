import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { login } from "../../store/session";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session'
import { Link } from "react-router-dom";
import './LoginForm.css'

const LoginFormPage = () => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()
  const [errors, setErrors] = useState([])

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([])

    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  const demoLogin = e => { 
    e.preventDefault()

    return dispatch(sessionActions.login({credential:'demo@user.io', password:'password'}))
    .then(()=> history.pushState('/'))
  }


  return(
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="login-type">
            <button>Login</button>
            <Link to='/signup'><button>Sign Up</button></Link>
        </div>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <label>
          <input type="text" placeholder="Username or Email" value={credential} onChange={e=>setCredential(e.target.value)} required />
        </label>

        <label>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} required />
        </label>

        <button id="signup-user" className="btn">Login</button>
        <button className="btn" id="demo-user" onClick={demoLogin}>Demo Login</button>
      </form>
    </div>
  )
}

export default LoginFormPage