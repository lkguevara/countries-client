import './App.css';
// Router dom
import { Routes, Route } from "react-router-dom";
// imports componentes
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail.jsx';
import Create from './views/Create/Create';
import NotFound from './views/NotFound/NotFound';

function App() {
  return (
    <>
      {/* {location.pathname !== "/" && <Nav/>} */}
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path= '/create'  element={<Create />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
    
  );
}

export default App;
