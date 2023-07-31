import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChangehandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-login">
      <label htmlFor="name">
        <p>Email</p>
        <input type="email" value={email} onChange={onEmailChangehandler} />
      </label>
      <label htmlFor="name">
        <p>Password</p>
        <input type="password" value={password} onChange={onPasswordChangeHandler} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
