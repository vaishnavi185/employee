import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import SignupPage from './components/SignupPage'
import Login from './components/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignupPage></SignupPage> */}
      <Login></Login>
    </>
  )
}

export default App
