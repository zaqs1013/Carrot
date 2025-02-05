import React, { useState } from "react";
import ItemComponent from "./ItemComponent";
import ItemC from "./ItemC";
import "./css/Body.css";
import legoImage from "./image/lego.jpeg";
import keyboard from "./image/keyboard.jpg";
import MyPost from "./MyPost";
import Add from "./Add";
import nomalImage from "./image/nomal.png";
import mo from "./image/mo.jpeg";

const Body = ({ setMode, Mode, selectedCategory }) => {
  const [topics, setTopics] = useState([
    { my: false,id: 1, name: "레고", location: "서울", note: "조립 완료", purchase: true,  image: legoImage, category: "장난감", money: "2,000원" },
    { my: true,id: 2, name: "키보드", location: "천안", note: "잔기스", purchase: true,  image: keyboard, category: "PC용품", money: "32,000원" },
    { my: false,id: 3, name: "모닝", location: "인천", note: "나", purchase: false,  image: mo, category: "자동차", money: "3,200만원" },
  ]);

  const filteredTopics = selectedCategory === "전체"
    ? topics
    : topics.filter((topic) => topic.category === selectedCategory);

  const purchaseMode = (id) => {
    setTopics((topics) =>
      topics.map((topic) =>
        topic.id === id ? { ...topic, purchase: !topic.purchase } : topic
      )
    );
  };

  const addNewItem = (newItem) => {
    setTopics((prevTopics) => [
      ...prevTopics,
      {
        id: prevTopics.length + 1,
        ...newItem,
        purchase: true,
        image: nomalImage, 
        my: true,
      },
    ]);
  };

  const [selectedId, setSelectedId] = useState(null);
  let content = null;

  if (Mode === "default") {
    content = filteredTopics.map((topic) => (
      <ItemComponent
        My = {topic.my}
        key={topic.id}
        image={topic.image}
        name={topic.name}
        location={topic.location}
        note={topic.note}
        purchaseMode={() => purchaseMode(topic.id)}
        purchase={topic.purchase}
        setMode={(mode) => {
          setSelectedId(topic.id);
          setMode(mode);
        }}
        money={topic.money}
      />
    ));
  } else if (Mode === "ItemC") {
    content = <ItemC selectedId={selectedId} topics={topics} />;
  } else if (Mode === "Add") {
    content = <Add addNewItem={addNewItem} setMode={setMode} />;
  } else if (Mode === "MyPost") {
    content = <MyPost topics={topics} setTopics={setTopics} />;
  }

  return <main className="body"><div>{content}</div></main>;
};

export default Body;
