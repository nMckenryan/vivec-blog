import React from "react";
import Navbar from "./navbar";

export default function Layout({ children }) {
  const sermonList = children;

  return (
    <div className="h-screen bg-darkleather" id="layout">
      <title>Vivec Sermon API Showcase</title>
      <Navbar></Navbar>
      <div className="font-serif bg-gradient-radial from-lightleather to-shadow ">
        {sermonList}
      </div>
    </div>
  );
}
