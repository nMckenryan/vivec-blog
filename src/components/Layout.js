import React from "react";
import NavBar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div
      className="h-screen bg-gradient-radial from-lightleather to-shadow "
      id="layout"
    >
      <title>Vivec Sermon API Showcase</title>
      <NavBar />
      <div className="font-serif"></div>
      {children}
      <footer>
        <p>NMR 2021</p>
      </footer>
    </div>
  );
}
