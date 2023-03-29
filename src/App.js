import './App.css';
// Router dom
import { Routes, Route, useLocation } from "react-router-dom";
// imports componentes
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Landing/Landing';
import Create from './views/Create/Create';
import Nav from './components/Nav/Nav';

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <Nav/>}
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path= '/create'  element={<Create />} />
        <Route path='*' element={<h1>404: Not Found</h1>} />
      </Routes>
    </>
    
  );
}

export default App;
