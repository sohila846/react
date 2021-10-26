
import './App.css';
import Navbar from './navbar';
import Hero from './hero';
import Cards from './card';
import Content from './content';
import Feedback from './feedback';
import Footer from './footer';
function App() {
  return (
    <div className="App bg-dark">
      <Navbar/>
      <Hero/>
      <div className="m-5">
      <Cards/>
      </div>
      <Content/>
      <div className="m-5">
      <Feedback/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
