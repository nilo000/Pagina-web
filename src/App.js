import './App.css';
import Inicio from './components/home';
import Areas from './components/areas'
import NavBar from './components/NavBar'
import Nosotros from './components/nosotros'
import Contactos from './components/contactos';
import Foorer from './components/foorer';



function App() {
  return (
    <>
    <NavBar/>
    <Inicio/>
    <Nosotros/>
    <Areas/>
    <Contactos/>
    <Foorer/>
    </>
  );
}

export default App;
