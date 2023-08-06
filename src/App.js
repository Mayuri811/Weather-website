import React from 'react'
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Datad } from "./components/Pages/data";

import axios from "axios";
// axios.defaults.baseURL = "http://api.openweathermap.org";
axios.defaults.params = {};
// axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/:id" element={<Datad />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
  </>
  );
}

export default App;
