import { useState } from 'react'


import SignupPage from './components/SignupPage'
import Login from './components/Login'
import Formm from './components/Formm'
import ProfileCard from './components/ProfilePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignupPage></SignupPage> */}
      {/* <Login></Login> */}

      {/* <Formm></Formm> */}
      <ProfileCard></ProfileCard>
    </>
  )
}

export default App
