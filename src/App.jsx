import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Chip from './components/Chip'
import ChipCharacter from './components/chip/ChipCharacter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-primary-color to-tertiary-color">
      {/* <Chip/> */}
      <div className='w-2/3'>
        <form>
          <input type="search" name="" id="" />
          <button>Buscar</button>
        </form>
      </div>
      <div className='w-1/3'>
        <img src='https://mystickermania.com/cdn/stickers/rick-and-morty/sticker_2060-512x512.png'/>
      </div>
    </div>
  )
}

export default App
