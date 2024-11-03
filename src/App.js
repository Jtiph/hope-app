import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; 
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import './App.scss';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
        <div>
          <header>
            <Navbar/>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/error" element={<Error />} />
          </Routes>
          <footer>
            <Footer/>
          </footer>
        </div>
    </Router>
  );
}

export default App;

