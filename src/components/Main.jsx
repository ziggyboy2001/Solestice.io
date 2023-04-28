import React from "react";
import { Navbar, Home, Resume } from "./";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Main = () => {
  return (
    <>
      <div id="main">
        <Navbar />
        <Home />
        <Resume />
      </div>
    </>
  );
};

export default Main;
