import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Chip from './components/Chip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Chip/>
    </div>
  )
}

export default App
