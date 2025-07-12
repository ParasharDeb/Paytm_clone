
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Dashboard from './pages/dashboard'
import Sendmoney from './pages/sendmoney'
import LandingPage from './pages/landingpage'

function App() {


  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/send' element={<Sendmoney/>}/>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
