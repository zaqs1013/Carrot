import React from "react";
import ItemComponent from "./ItemComponent";

const MyPost = ({ topics = [], setTopics }) => {
  if (!topics) return <p>등록한 상품이 없습니다.</p>;

  const myItems = topics.filter((topic) => topic.my);

  const handleDelete = (id) => {
    setTopics((prevTopics) => prevTopics.filter((topic) => topic.id !== id));
  };

  return (
    <div>
      {myItems.length > 0 ? (
        myItems.map((topic) => (
          <ItemComponent
            key={topic.id}
            My={topic.my}
            image={topic.image}
            name={topic.name}
            location={topic.location}
            note={topic.note}
            purchaseMode={() => {}}
            status={topic.status}
            purchase={topic.purchase}
            setMode={() => {}}
            money={topic.money}
            onDelete={() => handleDelete(topic.id)} // 삭제 기능 추가
          />
        ))
      ) : (
        <p>등록한 상품이 없습니다.</p>
      )}
    </div>
  );
};

export default MyPost;
