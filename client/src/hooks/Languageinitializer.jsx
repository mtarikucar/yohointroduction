import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from '../../i18n';

export const LanguageInitializer = ({ children }) => {
  const currentLanguage = useSelector(state => state.language.value);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage]);

  return children;
}
