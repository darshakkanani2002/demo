// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Component/Footer';
import Home from './Component/Home';
import Nav from './Component/Nav';
import About from './Component/About';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Contact from './Component/Contact';
import Inquiry from './Component/Inquiry';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='about' element={<About></About>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='inquiry' element={<Inquiry></Inquiry>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>




    </div>
  );
}

export default App;
