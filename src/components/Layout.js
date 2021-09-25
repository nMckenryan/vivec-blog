import React from "react";

export default function Layout({ children }) {
  const sermonList = children;

  return (
    <div className="h-screen bg-darkleather" id="layout">
      <title>Vivec Sermon API Showcase</title>
      <div className="font-serif bg-gradient-radial from-lightleather to-shadow ">
        {sermonList}
      </div>
    </div>
  );
}
