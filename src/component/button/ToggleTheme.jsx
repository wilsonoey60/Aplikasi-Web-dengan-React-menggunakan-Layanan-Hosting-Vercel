import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeConsumer } from '../../contexts/ThemeContext';

function ToggleTheme() {
  return (
    <ThemeConsumer>
      {
        ({ theme, toggleTheme }) => (
          <button type="button" className="toggle-theme" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        )
      }
    </ThemeConsumer>
  );
}

export default ToggleTheme;
