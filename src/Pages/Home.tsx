import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="ContainerHome">
      <Link to= '/pomodoro'><button>P O M O D O R O</button></Link>
      <br/>
      <Link to= '/github'><button>G I T  H U B</button></Link>
    </div>
  )
}
