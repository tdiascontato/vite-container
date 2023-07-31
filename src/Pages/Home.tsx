import { Link } from "react-router-dom";
import '../Styles/Home.css';
//import Logo from '../Img/logo.png';
import Github from '../Img/githubProject.png';
import Pomodoro from '../Img/pomodoroProject.png';

export default function Home(){
  const linkStyle = {
    textDecoration: 'none',
  };
  return (
    <div className="ContainerHome">

      <div className="Works">

        <div className="PomodoroSpace">
        <Link to= '/pomodoro' style={linkStyle}>
          <h2>Use o método Pomodoro para estudar:</h2>
          <img src={Pomodoro} className='PomodoroImg'/>
        </Link>
        </div>
        <div className="GithubSpace">
        <Link to= '/github' style={linkStyle}>
          <h2>Pesquisa de Devs pelo API do Github:</h2>
          <img src={Github} className='GithubImg'/>
        </Link>
        </div>

      </div>
    </div>
  )
}
