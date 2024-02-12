import "./App.css";
import Combined from "./Components/Combined";
import Education from "./Components/Education";
import Experience from "./Components/Experince";
import Footer from "./Components/Footer";
import GifBackground from "./Components/GifBackground";
import Intro from "./Components/Intro";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <div>
      <GifBackground />
      <Navbar />
      
      <Intro />

      <Combined />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
