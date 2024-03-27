import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {
 
  return (
    <Router>
      {/* aqui eu posso definir as minhas views e os meus componentes padrão */}
      <NavBar></NavBar>
      <Routes>
        {/* Utilize o comando: 'npm install react-router-dom' */}
        {/* aqui, dentro do Routes eu vou definir as rotas */}
        <Route exact path="/" element={<Home></Home>}/>
          {/* Quando o path for exatamente '/', ele será representado pelo componente 'home' */}
        <Route path="/empresa" element={<Empresa></Empresa>}/>
          {/* O path '/empresa' será representado pelo componente 'emrresa' */}  
        <Route path="/contato" element={<Contato></Contato>}/>
          {/* O path '/contato' será representado pelo componente 'contato' */} 
      </Routes>
      <Footer></Footer>
    </Router>
    
  );
} 

export default App;
