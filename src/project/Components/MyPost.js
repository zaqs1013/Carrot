import React from "react";
import ItemComponent from "./ItemComponent";

const MyPost = ({ topics = [], setTopics }) => {
  if (!topics) return <p>등록한 상품이 없습니다.</p>;

  const myItems = topics.filter((topic) => topic.my);

  const handleEdit = (id, updatedData) => {
    setTopics((prevTopics) =>
      prevTopics.map((topic) =>
        topic.id === id ? { ...topic, ...updatedData } : topic
      )
    );
  };

  const handleDelete = (id) => {
    setTopics((prevTopics) => prevTopics.filter((topic) => topic.id !== id));
  };

  return (
    <div>
      {myItems.length > 0 ? (
        myItems.map((topic) => (
          <ItemComponent
            key={topic.id}
            My={topic.my} // 내 상품 여부 전달
            image={topic.image}
            name={topic.name}
            location={topic.location}
            note={topic.note}
            money={topic.money}
            purchase={topic.purchase}
            purchaseMode={() => {}}
            onDelete={() => handleDelete(topic.id)}
            onEdit={(updatedData) => handleEdit(topic.id, updatedData)}
            isMyPostPage={true} // 내 상품 페이지 여부 전달
          />
        ))
      ) : (
        <p>등록한 상품이 없습니다.</p>
      )}
    </div>
  );
};

export default MyPost;
