import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { Link } from "react-router-dom";
import './SignupForm.css'


const SignupFormPage = () => { 
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => { 
        e.preventDefault()
         if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

    const demoLogin = e => { 
    e.preventDefault()

    return dispatch(sessionActions.login({credential:'demo@user.io', password:'password'}))
    .then(()=> history.pushState('/'))
  }

    


    return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="login-type">
          <Link to='/login'><button>Login</button></Link>
          <button>Sign Up</button>
        </div>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <label>
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
        </label>

        <label>
          <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        </label>

        <label>
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <label>
          <input type="password" value={confirmPassword} placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>
        <div className="login-btn">
          <button id="signup-user" className="btn" type="submit">Sign Up</button>
          <button id='demo-user' className='btn'onClick={demoLogin}>Demo User</button>
        </div>
      </form>
    </div>
  );  
}

export default SignupFormPage;