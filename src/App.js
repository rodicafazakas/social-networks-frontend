import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 

import './App.css';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Friends from "./components/Friends/Friends";
import Home from "./pages/Home";
import Header from "./components/Header/Header";



function App() {
  return (
    <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
