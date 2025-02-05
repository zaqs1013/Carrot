import React from "react";
import "./css/Header.css"

const Header = ({setMode}) => {
  return (
    <div onClick={() => setMode("default")}>
      <header className="header">
        <h1>TemTemu</h1>
      </header>
    </div>
    
  );
};

export default Header;
