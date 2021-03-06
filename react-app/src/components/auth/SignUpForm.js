import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import Demo from '../Demo';
import './auth.css'

const SignUpForm = ({ setPage }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) setErrors(data)
    } else {
      setErrors(["password: Passwords must match."])
    }
  };


  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }


  return (
    < form className="main-auth-user-container" onSubmit={onSignUp}>
      <div className='errors-div'>
        {errors.map((error, ind) => (
          <div className='single-error-div' key={ind}>{error}</div>
        ))}
      </div>
      <div id="sub-auth-div">
        <div id="signup-titles">
          <h2 className='form-title'>Create your account</h2>
          <h2 className="form-title form-title-2">Registration is easy.</h2>
        </div>
        <div>
          <button
            id="auth-login-button"
            onClick={() => setPage(1)}
          >Login</button>
        </div>
      </div>
      <div>
        <label id='username-label'>Username</label>
        <input
          className='auth-form-input'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required={true}
        ></input>
      </div>
      <div>
        <label className='email-label'>Email</label>
        <input
          className='auth-form-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required={true}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          className='auth-form-input'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          required={true}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          className='auth-form-input'
          id='repeat-password-input'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className='auth-user-div'>
        <button className='auth-user-buttons' type='submit'>Sign Up</button>
        <Demo />
      </div>
    </form>

  );
};

export default SignUpForm;
