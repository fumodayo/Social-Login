import Navbar from "./components/Navbar";
import "./app.scss";
import { Home, Login, Post } from "./pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = false;

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
