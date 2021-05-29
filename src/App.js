import React from "react";
import Home from "./components.js/Home";
import Profile from "./components.js/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FetchPlaylist from "./components.js/FetchPlaylist";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="fetch" element={<FetchPlaylist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
