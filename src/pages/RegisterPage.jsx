import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../component/input/RegisterInput';
import { register } from '../utils/network-data';
import { LocaleConsumer } from '../contexts/LocaleContext';

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }

  return (
    <LocaleConsumer>
      {
        ({ locale }) => (
          <section className="register-page">
            <h2>{locale === 'id' ? 'Isi form untuk mendaftar akun.' : 'Fill the form to register account.'}</h2>
            <RegisterInput register={onRegisterHandler} />
            <p>
              {locale === 'id' ? 'Sudah punya akun? ' : 'Already have an account? '}
              <Link to="/">{locale === 'id' ? 'Login di sini' : 'Login here'}</Link>
            </p>
          </section>
        )
      }
    </LocaleConsumer>
  );
}

export default RegisterPage;
