import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/sidebar/Sidebar';
import About from './Components/about/About';
import Home from './Components/home/Home';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';
import Resume from './Components/resume/Resume';
import Contact from './Components/contact/Contact';
import Navbar from './Components/navbar/Navbar';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Services />
      <Contact />
    </main>
    </>
  );
}

export default App;
