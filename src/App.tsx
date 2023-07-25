import { Outlet } from 'react-router-dom';

import Footer from './Components/footer';
import NavBar from './Components/navbar';
import './Styles/App.css';

function App() {

  return (
    <div className="ContainerApp">

      <div className='NavBar'>
        <NavBar />
      </div>
      <div className='Outlet'>
        <Outlet/>
      </div>
      <div className='Footer'>
        <Footer />
      </div>

    </div>
  )
}

export default App
