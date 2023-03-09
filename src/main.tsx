import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from 'router/Router'

import './styles/global.css'
import './styles/tailwind.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
)
