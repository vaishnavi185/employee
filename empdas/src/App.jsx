import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignupPage from './components/SignupPage'
import Login from './components/Login'
import Formm from './components/Formm'
import ProfileCard from './components/ProfilePage'
import NavBar from './components/NavBar'

function App() {
  
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<SignupPage />} />
    //     <Route path='/login' element={<Login />} />
    //     <Route path='/form' element={<Formm />} />
    //     <Route path='/profile' element={<ProfileCard />} />
    //   </Routes>
    // </Router>

    <NavBar></NavBar>
  )
}

export default App
