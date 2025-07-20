import ProtectedRoute from './components/ProtectedRoute'; // add this import
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupPage from './components/SignupPage'
import Login from './components/Login'
import Formm from './components/Formm'

import Home  from './components/Home'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SignupPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/form' element={<Formm />} />
        
        <Route
          path='/Dasboard'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
