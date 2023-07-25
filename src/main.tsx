import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import ErrorPage from './Components/error-page.tsx';
import App from './App.tsx';
import Github from './Pages/Github.tsx';
import Pomodoro from './Pages/Pomodoro.tsx';
import Home from './Pages/Home.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/pomodoro',
        element: <Pomodoro />
      },
      {
        path: '/github',
        element: <Github />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
