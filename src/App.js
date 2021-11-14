import {BrowserRouter as Router, Route, Routes} from "react-router-dom"; 

import './App.css';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Friends from "./components/Friends/Friends";
import Profile from "./components/Profile/Profile";
import Home from "./pages/Home";



function App() {
  return (
    <div className="app">
        <Router>
          <Home />
          <Routes>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/friends" element={<Friends />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
