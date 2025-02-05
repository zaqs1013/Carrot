import React from "react";
import "./css/Header.css"

const Header = ({setMode}) => {
  return (
    <div>
      <header className="header">
        <h1 onClick={() => setMode("default")} class="header-color">TemTemu</h1>
      </header>
    </div>
    
  );
};

export default Header;
