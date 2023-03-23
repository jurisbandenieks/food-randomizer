import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.scss";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import Login from "./views/Login";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Favorites} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
