import './App.css'
import { Section } from './components/Section'
import { WithColorSwap } from './components/WithColorSwap'

function App() {


  // Imagina que tienes tu web personal llena de secciones con títulos y descripciones, y has creado una animación por medio de CSS para que únicamente las secciones que tu quieras cambien de colores 

  // Creamos un nuyevo componene con ColorSwapSection que contiene el HOC Aplicado a Section
  const ColorSwapSection = WithColorSwap(Section)

  return (
    <div className="App">
      <ColorSwapSection title='Higher Order Component' description='Conociendo los HOC' />
    </div>
  )
}

export default App
