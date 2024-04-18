import { useState } from 'react'
import './style/App.css'
import TariffContainer from './components/TariffContainer/TariffContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Тарифы</h1>
      <TariffContainer />
    </>
  )
}

export default App
