import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Project from './pages/Project/Project'
import Skills from './pages/Skills/Skills'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './app.scss'
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='sections'>
        <Home />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
