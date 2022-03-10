import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Demo from '../Demo';
import './auth.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

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
    <form className='main-auth-user-container' onSubmit={onLogin}>
      <div className='errors-div'>
        {errors.map((error, ind) => (
          <div className='single-error-div' key={ind}>{error}</div>
        ))}
      </div>
      <div className='auth-input-containers'>
        <div className='auth-email-container'>
          <label className='email-input' htmlFor='email'>Email </label>
          <input
            name='email'
            type='text'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input
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
  );
};

export default LoginForm;
