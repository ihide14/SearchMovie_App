import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'

// eslint-disable-next-line react-refresh/only-export-components
const Movie = ReactDOM.createRoot(document.getElementById('root'))

Movie.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

