import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import HomePage from './components/HomePage'
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Steps from "./components/Steps";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <div className="fixed z-20">
        <MenuBar />
      </div>

      <HomePage />
      <Services />
      <Projects />
      <Marquee />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
