import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';
import Basic from './components/Basic';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/" element={<Basic />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
