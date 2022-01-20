import logo from './logo.svg';
import Home from './Components/Home';
import About from './Components/About'
import Experience from './Components/Experience';
import Education from './Components/Education';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Nav from './Components/Nav';
import './App.css';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Experience />
      <Education />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
