import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Uploader from './Uploader'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Uploader/>
  )
}

export default App
