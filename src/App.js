import './App.css';
import List from'./Components/List.js';
import FavoritesList from'./Components/FavoritesList.js';

//Standard import
import {Route, Link, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <nav>
        <ul>
          <li><Link to='/Home'>Home</Link></li>
          <li><Link to='/Favorites'>Tracked Resources</Link></li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/Home' element={<List />} />
          <Route path='/Favorites' element={<FavoritesList />} />
        </Routes>
      </main>

    </div>
  );
}

export default App;
