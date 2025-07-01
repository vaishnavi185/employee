import { useState } from 'react'


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
