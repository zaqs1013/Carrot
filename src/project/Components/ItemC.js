import React from "react";
import "./css/itemC.css"
const ItemC = ({ selectedId, topics }) => {
  const selectedItem = topics.find(item => item.id === selectedId);

  return (
    <div className="information">
      {selectedItem ? (
          <div className="title">

          <img src={selectedItem.image} alt={selectedItem.name} className="itemCsize" />
          
          <h2>{selectedItem.name}</h2>
          <p><strong>장소:</strong> {selectedItem.location}</p>
          <p><strong>구매 가능 여부:</strong> {selectedItem.purchase}</p>
          <p><strong>특이사항:</strong></p>
          <textarea readOnly>
           {selectedItem.note}
          </textarea>
          </div>
      ) : (
        <p>선택된 아이템이 없습니다.</p>
      )}
    </div>
  );
};

export default ItemC;
