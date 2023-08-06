import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import '../Styles/Home.css';
import Github from '../Img/githubProject.png';
import Pomodoro from '../Img/pomodoroProject.png';

export default function Home(){
  const {t} = useTranslation("global");
  const linkStyle = {
    textDecoration: 'none',
  };
  return (
    <div className="ContainerHome">

      <div className="Works">

        <div className="PomodoroSpace">
        <Link to= '/pomodoro' style={linkStyle}>
          <h2 id='Description'>{t("Home.Pomodoro")}</h2>
          <img src={Pomodoro} className='PomodoroImg'/>
          <button>{t("Home.Button")}</button>
        </Link>
        </div>
        <div className="GithubSpace">
        <Link to= '/github' style={linkStyle}>
          <h2 id='Description'>{t("Home.Github")}</h2>
          <img src={Github} className='GithubImg'/>
          <button>{t("Home.Button")}</button>
        </Link>
        </div>

      </div>
    </div>
  )
}
