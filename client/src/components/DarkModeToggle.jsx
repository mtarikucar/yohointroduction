import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from './darkModeSlice';

const DarkModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
    // Eğer daha geniş kapsamlı bir stil değişikliği yapmak isterseniz, burada ekstra fonksiyonları veya CSS değişikliklerini de yapabilirsiniz.
  };

  return (
    <button onClick={handleToggle}>
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
