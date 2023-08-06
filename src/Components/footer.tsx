import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom';
import '../Styles/Footer.css';

import Wapp from '../Img/whatsapp.png';
import github2 from '../Img/github2.png';
import linkedin from '../Img/linkedin.png';
import facebook from '../Img/facebook.png';

export default function Footer(){
    const {t} = useTranslation("global");
    const [copy, setCopy] = useState('tdiascontato@gmail.com');
    
    const handleClick = ()=>{       
          navigator.clipboard.writeText('tdiascontato@gmail.com');
          setCopy(`${t("Footer.Copy")}`);
          setTimeout(()=>{
              setCopy('tdiascontato@gmail.com')
          }, 2000)           
}

  return (
    <div className="ContainerFooter">

                <ul className="BoxSocialFooter">
                    <li><Link to = "https://api.whatsapp.com/send?phone=5521990032507&text=Ol%C3%A1!%0AComo%20vai?" target="_blank">
                        <img src={Wapp} alt = 'Meu wahtsapp' />
                        </Link></li>
                    <li><Link to = "http://www.github.com/tdiascontato" target="_blank">
                        <img src={github2} alt = 'Meu github' />
                        </Link></li>
                    <li><Link to = "http://www.linkedin.com/in/tdiascontato" target="_blank">
                        <img src={linkedin} alt = 'Meu Linkedin' />
                        </Link></li>
                    <li><Link to = "http://www.facebook.com/aulascomtiago" target="_blank">
                        <img src={facebook} alt = 'Meu Facebook' />
                        </Link></li>
                </ul> 
 
                <div className='CopyAndTap'>
                    <label  id="label" htmlFor="contact">{t("Footer.Title")}</label>
                    <button  onClick={handleClick} id="contact">{copy}</button>
                </div>

    </div>
  )
}