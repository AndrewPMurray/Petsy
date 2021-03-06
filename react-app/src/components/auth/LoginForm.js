import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Demo from '../Demo';
import SignUpForm from './SignUpForm';
import './auth.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      {page === 1 &&
        <form className='main-auth-user-container' onSubmit={onLogin}>
          <div className='errors-div'>
            {errors.map((error, ind) => (
              <div className='single-error-div' key={ind}>{error}</div>
            ))}
          </div>
          <div id="sub-auth-div">
            <h2 className='form-title'>Login</h2>
            <div >
              <button
                id="auth-button"
                onClick={() => setPage(2)}
              >Sign Up</button>
            </div>
          </div>
          <div className='auth-input-containers'>
            <div className='auth-email-container'>
              <label className='email-label' htmlFor='email'>Email </label>
              <input
                className='auth-form-input'
                name='email'
                type='text'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div>
              <label htmlFor='password'>Password </label>
              <input
                className='auth-form-input'
                name='password'
                type='password'
                value={password}
                onChange={updatePassword}
              />
            </div>
          </div>
          <div className='auth-user-div'>
            <button className='auth-user-buttons' type='submit'>Login</button>
            <Demo />
          </div>
        </form >
      }
      {page === 2 &&
        <SignUpForm setPage={setPage} />
      }
    </>
  );
};

export default LoginForm;
