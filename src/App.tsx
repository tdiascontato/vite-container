import {useState, createContext} from 'react';
import { Outlet } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_pt from './translate/pt/global.json';
import global_en from './translate/en/global.json';
import Footer from './Components/footer';
import NavBar from './Components/navbar';
import './Styles/App.css';

export const ThemeContext = createContext<{theme: string, toggleTheme: () => void} | null> (null);

function App(): JSX.Element {

  const [theme, setTheme] = useState<string>('dark');
  const toggleTheme = () => {
    setTheme((curr)=>(curr === "light" ? "dark" : "light"));
  }

  const [language, setLanguage] = useState<string>('pt');
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
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <I18nextProvider i18n={i18next}>
      <div className="ContainerApp" id={theme}>

        <div className='NavBar'>
          <NavBar modeScreen={toggleTheme} modeLanguage={toggleLanguage}/>
        </div>
        <div className='Outlet'>
          <Outlet/>
        </div>
        <div className='Footer'>
          <Footer />
        </div>

      </div>
      </I18nextProvider>
    </ThemeContext.Provider>
    </>
  )
}

export default App
