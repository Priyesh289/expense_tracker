import React from 'react'
import Header from './components/Header/Header'
import BottomNav from './components/BottomNav/BottomNav'
import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import AddTransaction from './pages/AddTransaction/AddTransaction'
import Transactions from './pages/Transaction/Transactions'
import Analytics from './pages/Analytics/Analytics'
  import { ToastContainer, toast } from 'react-toastify';

const App = () => {
    return (
        <div style={{
            maxWidth:'100vw',
           maxHeight:'100vh',
            paddingInline: '1rem',
            
            
            }}>
                <ToastContainer/>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/transactions' element={<Transactions />} />
                <Route path='/add-transaction' element={<AddTransaction />} />
                <Route path='/analytics' element={<Analytics />} />
            </Routes>
            <BottomNav />
        </div>
    )
}

export default App