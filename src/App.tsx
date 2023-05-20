import Home from "./pages/Home";
import Login from "./pages/Login";
import {Routes, Route, Navigate} from 'react-router-dom';
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/home' element={<Home />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App
