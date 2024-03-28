import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Container customClass="min-height">
        <Routes>
            <Route exact path='/' element={<Home></Home>}/>
            <Route exact path='/company' element={<Company></Company>}/>
            <Route exact path='/contact' element={<Contact></Contact>}/>
            <Route exact path='/newproject' element={<NewProject></NewProject>}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
