import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { RouterProvider } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
     <RouterProvider
          router={App}
     />
    </React.StrictMode>

)
