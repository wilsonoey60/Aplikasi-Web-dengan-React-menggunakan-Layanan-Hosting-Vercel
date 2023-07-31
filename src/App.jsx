/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import HomePage from './pages/HomePage';
import AddItemPage from './pages/AddItemPage';
import ArchivePage from './pages/ArchivePage';
import NotFoundPage from './pages/NotFoundPage';
import DetailPage from './pages/DetailPage';
import ToggleTheme from './component/button/ToggleTheme';
import ToggleLocale from './component/button/ToggleLocale';
import { ThemeProvider } from './contexts/ThemeContext';
import { LocaleProvider } from './contexts/LocaleContext';
import { getUserLogged, putAccessToken } from './utils/network-data';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('data-theme') || 'light');
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);
  useEffect(() => {
    async function getData() {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    }
    getData();
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('data-theme', theme);
    localStorage.setItem('locale', locale);
  }, [theme, locale]);
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  function toggleLocale() {
    setLocale(locale === 'id' ? 'en' : 'id');
  }

  async function onLoginSuccess(user) {
    putAccessToken(user.accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
  }

  // function getUsername() {
  //   if (authedUser) {
  //     return authedUser.username;
  //   }
  //   return '';
  // }

  if (initializing) {
    return <div>Loading ...</div>;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
        <LocaleProvider value={{ locale, toggleLocale }}>
          <div className="app-container">
            <header>
              <h1><Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Note List'}</Link></h1>
              <ToggleLocale />
              <ToggleTheme />
            </header>
            <main>
              <Routes>
                <Route path="/*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            </main>
          </div>
        </LocaleProvider>
      </ThemeProvider>

    );
  }

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <LocaleProvider value={{ locale, toggleLocale }}>
        <div className="app-container">
          <header>
            <h1><Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Note List'}</Link></h1>
            <ToggleLocale />
            <ToggleTheme />
            <nav className="navigation">
              <ul>
                <li>
                  <Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archive'}</Link>
                </li>
                <li>
                  <button onClick={onLogout} className="button-logout">
                    Logout
                    <FiLogOut />
                  </button>
                </li>
              </ul>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="notes/new" element={<AddItemPage />} />
            <Route path="notes/:id" element={<DetailPage />} />
            <Route path="archives" element={<ArchivePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
