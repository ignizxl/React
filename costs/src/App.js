import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Container customClass="min-hight">
        <Routes>
            <Route exact path='/' element={<Home></Home>}/>
            <Route exact path='/projects' element={<Projects></Projects>}/>
            <Route exact path='/company' element={<Company></Company>}/>
            <Route exact path='/contact' element={<Contact></Contact>}/>
            <Route exact path='/newproject' element={<NewProject></NewProject>}/>
        </Routes>
      </Container>
     <Footer></Footer>
    </Router>
  );
}

export default App;
