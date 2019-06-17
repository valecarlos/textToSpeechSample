import React from 'react'
import { useTranslation } from 'react-i18next';

export default function LocaleSwitch() {
  const {i18n} = useTranslation();
  
  const changeLocale = locale => {
    i18n.changeLanguage(locale)
  };

  return (
    <div>
      <button onClick={() => { changeLocale('en-US')}}>EN</button>
      <button onClick={() => { changeLocale('de-DE')}}>DE</button>
      <button onClick={() => { changeLocale('pt-BR')}}>PR</button>
    </div>
  )
}
