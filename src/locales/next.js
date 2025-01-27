import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import kg from './kg/kg.json';
import ru from './ru/ru.json';
import en from './en/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation:en
    },
    kg: {
      translation:kg
    },
    ru: {
      translation:ru
    }
  },
  lng: 'kg',
  
})
export default i18n;

// сделать верстку Home до конца
// 