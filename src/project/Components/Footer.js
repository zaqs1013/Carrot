import React from "react";
import "./css/Footer.css";

const Footer = ({setMode}) => {
  return (
    <footer className="footer">
      <button className="footer-btn" onClick={()=>setMode("MyPost")}>내 상품</button>
      <button className="footer-btn" onClick={()=>setMode("Add")}>등록</button>
    </footer>
  );
};

export default Footer;
