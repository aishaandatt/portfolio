import Home from './pages/Home/Home'
import Experience from './pages/Experience/Experience'
import Project from './pages/Project/Project'
import Skills from './pages/Skills/Skills'
import './app.scss'
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div className='app'>
      <div className='sections'>
        <Home />
        <Experience />
        <Project />
        {/* hrllo */}
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
