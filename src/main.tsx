import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'

//routes:
import { Login } from './components/login'
import { Products } from './components/products'
import { UserPage } from './components/usuarios'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/users",
        element: <UserPage/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
