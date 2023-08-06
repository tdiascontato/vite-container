import {useState} from 'react';
import { Outlet } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_pt from './translate/pt/global.json';
import global_en from './translate/en/global.json';
import Footer from './Components/footer';
import NavBar from './Components/navbar';
import './Styles/App.css';

function App() {

  const [language, setLanguage] = useState('pt');
  const toggleLanguage = () => {
    language === 'pt' ? setLanguage('en') : setLanguage('pt')
  }

  i18next.init({
    interpolation: {escapeValue: false},
    lng: `${language}`,
    resources:{
      pt: {
        global: global_pt
      },
      en: {
        global: global_en
      }
    }
  })

  return (
    <I18nextProvider i18n={i18next}>
    <div className="ContainerApp">

      <div className='NavBar'>
        <NavBar modeLanguage={toggleLanguage}/>
      </div>
      <div className='Outlet'>
        <Outlet/>
      </div>
      <div className='Footer'>
        <Footer />
      </div>

    </div>
    </I18nextProvider>
  )
}

export default App
