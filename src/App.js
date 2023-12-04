import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Home from './Pages/Home/Home';
import MovieList from './Component/MovieList/movieList';
import MovieDetails from './Pages/MovieDetails/MovieDetails';

function App(){
  return (<>
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
     { <Route path="movies/details/:id" element={<MovieDetails/>}></Route>}
      <Route path="movies/:type" element={<MovieList/>}></Route>
      <Route path="/*" element={<h1>Error page</h1>}></Route>
    </Routes>
  </Router>
  </>
   
  )
}

export default App;