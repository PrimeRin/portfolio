import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;
