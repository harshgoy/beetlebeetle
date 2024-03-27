import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import Hero from "./components/Hero/Hero";
import Calculator from "./components/Calculator/Calculator";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import MobileNavbar from "./components/Navbar/MobileNavbar";

function App() {
  return (
    <div className="App">
     <Navbar/>
     <MobileNavbar/>
     <Hero/>
     <Calculator/>
     <Blog/>
     <Footer/>
    </div>
  );
}

export default App;
