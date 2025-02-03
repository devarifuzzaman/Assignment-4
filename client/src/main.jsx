import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {Analytics} from "@vercel/analytics/react";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Analytics />
    <App />
  </StrictMode>,
)
