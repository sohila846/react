import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import MovieDetails from './moviesDetails';
import Movies from './movies';
import Favorites from "./favorites";
import Page2 from "./page2";
import Page3 from "./page3";
function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/details/:id" exact component={MovieDetails} />
        <Route path="/:page" exact component={Page2} />
        <Route path="/:page" exact component={Page3} />
        <Route path="/favorites" exact component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
