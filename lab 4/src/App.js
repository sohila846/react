import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Movies from './Components/Pages/Movies/Movies';
import NotFound from './Components/NotFound/NotFound';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import FavMovies from './Components/FavMovies/FavMovies';
function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/details/:id" exact component={MovieDetails} />
        <Route path="/favmovies" exact component={FavMovies} />
        <Route path="*" exact component={NotFound} />
     </Switch>
   </Router>
  )
}

export default App;
