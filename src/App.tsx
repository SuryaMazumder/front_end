import { useState } from 'react'
import {

  Route,
  BrowserRouter as Router,
  Routes,

} from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';

function App() {

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
