import { Link } from 'react-router-dom';

import '../Styles/NavBar.css';
import Wapp from '../Img/whatsapp.png';
import Logo from '../Img/logo.png';
import github from '../Img/github.png';
import linkedin from '../Img/linkedin.png';
import facebook from '../Img/facebook.png';
import languages from '../Img/languages.png';
import mode from '../Img/mode.png';

export default function NavBar() {
  return (
    <div className='NavBarContainer'>
      <ul className="Box-Menu">
          <li><Link to ='https://tdiascontato.vercel.app/' className='link Home'>Home</Link></li>
          <li><Link to ='https://tdiascontato.vercel.app/repository' className='link'>Repository</Link></li>
      </ul>
                          
      <Link to="https://tdiascontato.vercel.app/"><img src={Logo}  alt= 'Logo' className='Logo' /></Link>
                
      <div className="RightSide">

        <ul className="BoxSocial">
            <li><Link to = "https://api.whatsapp.com/send?phone=5521990032507&text=Ol%C3%A1!%0AComo%20vai?" target="_blank">
              <img src={Wapp} alt = 'Meu wahtsapp' /></Link></li>
            <li><Link to = "http://www.github.com/tdiascontato" target="_blank">
              <img src={github} alt = 'Meu github' /></Link></li>
            <li><Link to = "http://www.linkedin.com/in/tdiascontato" target="_blank">
              <img src={linkedin} alt = 'Meu Linkedin' /></Link></li>
            <li><Link to = "http://www.facebook.com/aulascomtiago" target="_blank">
              <img src={facebook} alt = 'Meu Facebook' /></Link></li>
        </ul>         
                  
        <ul className="BoxCheats">
            <li><img src={languages} alt = 'pt-br'/></li>
            <li><img src={mode} alt = 'light-dark'/></li>
        </ul>
              
     </div>
    </div>
  )
}
