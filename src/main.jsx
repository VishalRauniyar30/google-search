import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import StateContextProvider from './contexts/StateContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
  </StateContextProvider>
)
