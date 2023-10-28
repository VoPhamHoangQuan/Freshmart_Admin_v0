import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Globalstyle from './components/Globalstyle'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Globalstyle>
      <App />
    </Globalstyle>
  </React.StrictMode>,
)
