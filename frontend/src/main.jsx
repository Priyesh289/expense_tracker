import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FinanceContextProvider from './context/FinanceContext.jsx'

createRoot(document.getElementById('root')).render(
  <FinanceContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FinanceContextProvider>,
)
