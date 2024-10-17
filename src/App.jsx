import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Header from './Components/Header'
import Landing from './Pages/Landing'
import AllProject from './Pages/AllProject'
import Auth from './Pages/Auth'
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      <Route path='projects/' element={<AllProject/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App
