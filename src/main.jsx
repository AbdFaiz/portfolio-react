import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="overflow-x-hidden font-serif text-white bg-zinc-950 scroll-smooth">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
