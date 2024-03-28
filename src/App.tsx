import './App.css'
import { Client } from './components/Client'
import { Footer } from './components/Footer'
import { GraphicPhoto } from './components/GraphicPhoto'
import { Images } from './components/Images'
import { Main } from './components/Main'
import { StandOut } from './components/StandOut'
import { Transform } from './components/Transform'

export function App() {
  return (
    <div className='app'>
      <Main />
      <Transform />
      <StandOut />
      <GraphicPhoto />
      <Client /> 
      <Images />
      <Footer />
    </div>
  )
}

