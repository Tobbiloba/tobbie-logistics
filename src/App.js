import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import HomePage from './components/HomePage'
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Steps from "./components/Steps";
function App() {
  return (
    <div className="App">
      <div className="fixed">
        <MenuBar />
      </div>

      <HomePage />
      <Services />
      <Marquee />
      <Steps />
      <Footer />
    </div>
  );
}

export default App;
