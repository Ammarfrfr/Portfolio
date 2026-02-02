 
import './App.css'
import Home from './components/home/home.jsx'
import Navbar from './components/navbar/navbar.jsx'
import About from './components/about/about.jsx'
import Project from './components/project/project.jsx'
import ContactUs from './components/contact/contact.jsx';

function App() {

  return (
    <>
    <section id="home1">
      <Home/>
    </section>
    <section id="navbar">
      <Navbar/>
    </section>
    <section id="about">
      <About/>
    </section>
    <section id="project">
      <Project/>
    </section>
    <section id="contact">
      <ContactUs/>
    </section>
    </>
  )
}

export default App
