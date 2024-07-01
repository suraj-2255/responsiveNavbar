import React from 'react';
import './App.css';
import Main from './component/Main';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import About from './component/about/About';
import RegistrationForm from './component/regisetr/Regisetr';
import Login from './component/login/Login';
import Navbar
  from './component/common/Navbar/Navbar';
import Footer from './component/common/footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <BrowserRouter> */}
      <Router>
        <Routes>

          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
