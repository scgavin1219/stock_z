import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'


const SignupFormPage = () => { 
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

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

    


    return (
    <div className="form-container">
      
      <form onSubmit={handleSubmit}>
        <div className="login-type">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
        <ul>
          {errors.map(error => <li key={error}>{error}</li>)}
        </ul>

        <label>
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} required/>
        </label>

        <label>
          <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)} required />
        </label>

        <label>
          <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <label>
          <input type="password" value={confirmPassword} placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)} required />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );  
}

export default SignupFormPage;