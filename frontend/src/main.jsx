import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContentextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <ShopContentextProvider>
   <App />
   </ShopContentextProvider>
  </BrowserRouter>,
)
