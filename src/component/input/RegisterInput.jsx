import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const onSubmitHandler = (event) => {
    if (password === confirmPassword) {
      register({
        name,
        email,
        password,
      });
    } else {
      event.preventDefault('Passwords must be the same');
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="input-register">
      <label htmlFor="name">
        <p>Nama</p>
        <input type="text" value={name} onChange={onNameChange} />
      </label>
      <label htmlFor="name">
        <p>Email</p>
        <input type="email" value={email} onChange={onEmailChange} />
      </label>
      <label htmlFor="name">
        <p>Password</p>
        <input type="password" autoComplete="current-password" value={password} onChange={onPasswordChange} />
      </label>
      <label htmlFor="name">
        <p>Confirm Password</p>
        <input type="password" autoComplete="current-password" value={confirmPassword} onChange={onConfirmPasswordChange} />
      </label>
      <button type="submit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
