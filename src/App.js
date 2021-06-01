import React from "react";
import Home from "./components.js/Home";
import Profile from "./components.js/Profile";
import ProfileResult from "./components.js/ProfileResult";
import NotFound from "./components.js/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*"element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profileresult/:user" element={<ProfileResult />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
