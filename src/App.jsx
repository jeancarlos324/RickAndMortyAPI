import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Chip from './components/Chip'
import ChipCharacter from './components/chip/ChipCharacter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      {/* <Chip/> */}
      <ChipCharacter title="Raza" content="Humano" className=" bg-green-600"/>
    </div>
  )
}

export default App
