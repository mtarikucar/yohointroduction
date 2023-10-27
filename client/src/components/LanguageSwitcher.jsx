import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); 
    dispatch({ type: 'SET_LANGUAGE', payload: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('tr')}>Türkçe</button>
      <button onClick={() => changeLanguage('zh')}>中文</button>
    </div>
  );
};
