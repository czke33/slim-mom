import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LanguageSwicher.module.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = event => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className={styles.language}>
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="hu">Magyar</option>
        <option value="de">Deutsch</option>
        <option value="ro">Română</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;