import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { LocaleConsumer } from '../../contexts/LocaleContext';

function ToggleLocale() {
  return (
    <LocaleConsumer>
      {
                ({ locale, toggleLocale }) => (
                  <nav className="navigation">
                    <ul>
                      <li>
                        <button type="button" className="toggle-locale" onClick={toggleLocale}>
                          {locale === 'id' ? <FaGlobe /> : <FaGlobe />}
                        </button>
                      </li>
                    </ul>
                  </nav>
                )
            }
    </LocaleConsumer>
  );
}

export default ToggleLocale;
