import React from "react";
import "./css/Tag.css";

const categories = ["전체", "자동차", "장난감", "PC용품"];

const Tag = ({ setCategory }) => {
  return (
    <nav className="tag-nav">
      {categories.map((category) => (
        <a 
          key={category} 
          href="#" 
          className="tag-link"
          onClick={(e) => {
            e.preventDefault();
            setCategory(category);
          }}
        >
          {category}
        </a>
      ))}
    </nav>
  );
};

export default Tag;
