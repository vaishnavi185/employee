import { useState } from 'react'


import SignupPage from './components/SignupPage'
import Login from './components/Login'
import Formm from './components/Formm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignupPage></SignupPage> */}
      {/* <Login></Login> */}

      <Formm></Formm>
    </>
  )
}

export default App
