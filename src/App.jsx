import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ChooseUs from "./components/ChooseUs";
import StartedNow from "./components/StartedNow";
import "./index.css";
import Footer from "./components/Footer";
import Spline from "./components/Spline";

const Main = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="main">
        <About />
      </div>
      <ChooseUs />
      <StartedNow />

      <Footer />
    </>
  );
};

function App() {
  return <Main />;
}
export default App;
