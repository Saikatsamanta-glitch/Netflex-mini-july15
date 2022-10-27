import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Player from './Pages/Player';
import Login from './Pages/Login';
import NavScrollExample from './Components/Appbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavScrollExample />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/player' element={<Player />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
