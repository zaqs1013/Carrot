import "./css/MainComponent.css";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import React, { useState } from 'react';
import Tag from "./Tag.js";

const MainComponent = () => {
  const [mode, setMode] = useState("default");
  const [category, setCategory] = useState("전체");

  return (
    <div className="main">
      <Header setMode={setMode} />
      {mode === "default" && <Tag setCategory={setCategory} />}
      <Body Mode={mode} setMode={setMode} selectedCategory={category} />
      <Footer setMode={setMode} />
    </div>
  );
};

export default MainComponent;
