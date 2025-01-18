
import './styles/App.css';

import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import Favorites from './pages/Favorites'
import { Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SearchResults from './pages/SearchResults';
import { MovieProvider } from './contexts/FavoriteContext';
function App() {
  
  return (
    <MovieProvider>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/search' element={<SearchResults/>}/>
        </Routes>
      </main>
   </MovieProvider>
  );
}



export default App;
