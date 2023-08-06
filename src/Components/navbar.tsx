import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '../Styles/NavBar.css';
import Logo from '../Img/logo.png';
import languages from '../Img/languages.png';
import mode from '../Img/mode.png';

interface NavBarProps{
  modeLanguage: () => void,
  modeScreen: ()=> void | null
}

export default function NavBar({modeLanguage, modeScreen}: NavBarProps){
  const {t} = useTranslation("global");

  return (
    <div className='NavBarContainer'>
      <ul className="Box-Menu">
        <li><Link to="/"><img src={Logo}  alt= 'Logo' className='Logo' /></Link></li>
        <li><Link to ='https://tdiascontato.vercel.app/repository' id='Description' className='link'>{t("NavBar.Works")}</Link></li>
      </ul>
                
      <div className="RightSide">                  
        <ul className="BoxCheats">
            <li><img src={languages} onClick={modeLanguage} alt = 'pt-br'/></li>
            <li><img src={mode} onClick={modeScreen} alt = 'light-dark'/></li>
        </ul>
     </div>
    </div>
  )
}