import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const containerID = "root";
const container = document.getElementById(containerID);

if (!container) {
  throw new Error("Application container does not exists id='"+containerID+"'");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
);
