import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/context";
import { isTokenValid } from "./utils/JwtVerifier";
import NoteView from "./pages/NoteView";

function App() {
  const context = useContext(UserContext);
  useEffect(() => {
    const token: any = localStorage.getItem("token");
    if (token && isTokenValid(token)) {
      context.setLoggedIn(true);
    }
  });
  return (
    <Routes>
      <Route path='/' element={context.isLoggedIn ? <Home /> : <Login />} />
      <Route
        path='/signup'
        element={context.isLoggedIn ? <Home /> : <Signup />}
      />
      <Route
        path='/home'
        element={context.isLoggedIn ? <Home /> : <Navigate to='/' />}
      />
      <Route
        path='/note/:noteId'
        element={context.isLoggedIn ? <NoteView /> : <Login />}
      />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
