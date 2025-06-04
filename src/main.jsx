import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { loadDelayedScripts } from './utils/loadScripts'

setTimeout(() => {
  loadDelayedScripts();
}, 5000);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)