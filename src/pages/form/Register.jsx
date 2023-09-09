import React, { useState } from 'react';
import './form.css';

const intUsers = { name: '', email: '', password: '' };

const Register = () => {
  const [user, setUser] = useState(intUsers);
  const { name, email, password } = user;

  const [showUser, setShowUser] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowUser(user);
  };

  return (
    <div className='registration-form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            value={name}
            onChange={handleChange}
            type='name'
            name='name'
            className='form-control item'
            placeholder='Username'
          />
        </div>

        <div className='form-group'>
          <input
            value={email}
            onChange={handleChange}
            type='email'
            name='email'
            className='form-control item'
            placeholder='Email'
          />
        </div>

        <div className='form-group'>
          <input
            value={password}
            onChange={handleChange}
            type='password'
            name='password'
            className='form-control item'
            placeholder='Password'
          />
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-block create-account'>
            Create Account
          </button>
        </div>
      </form>
      <h4>Display User When Submited</h4>
      <p>Name: {showUser.name}</p>
      <p>email: {showUser.email}</p>
      <p>pasword: {showUser.password}</p>
    </div>
  );
};

export default Register;
