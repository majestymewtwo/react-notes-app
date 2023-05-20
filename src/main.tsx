import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId='942251582704-49babdq7jkhj94amvo8pk7muu7abn7np.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
