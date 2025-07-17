import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import SignupPage from './components/SignupPage'
import Login from './components/Login'
import Formm from './components/Formm'
import ProfileCard from './components/ProfilePage'
import NavBar from './components/NavBar'
import Home  from './components/Home'

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
<Home></Home>
  )
}

export default App
