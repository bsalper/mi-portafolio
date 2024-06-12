import './App.css'
import Inicio from './inicio/Inicio.jsx'
import Proyectos from './proyectos/Proyectos.jsx'
import About from './about/About.jsx'
import Menu from './menu/Menu.jsx'
import Contacto from './contacto/Contacto.jsx'
import Footer from './footer/Footer.jsx'

function App() {

  return (
    <div>
      <Menu/>
      <main>
        <Inicio />
        <About />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
