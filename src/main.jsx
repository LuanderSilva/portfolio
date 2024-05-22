import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './globalStyle.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
