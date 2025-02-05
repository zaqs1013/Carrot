import React from "react";
import "./css/itemC.css";

const ItemC = ({ selectedId, topics, purchase }) => {
  const selectedItem = topics.find(item => item.id === selectedId);

  return (
    <div className="information">
      {selectedItem ? (
        <div>
          <div className="info-card">
            <img src={selectedItem.image} alt={selectedItem.name} className="itemCsize" />
            <h2>{selectedItem.name}</h2>
          </div>

          <div className="note-container">
            <div className="note-card">
              <h3>특이사항</h3>
              <p>{selectedItem.note}</p>
            </div>

            <div className="note-card">
              <h3>장소</h3>
              <p>{selectedItem.location}</p>
            </div>

            <div className="note-card">
              <h3>구매 가능 여부</h3>

              <p>{selectedItem.purchase ? "구매 가능" : "판매 완료"}</p> {/*수정됨*/}
            </div>
          </div>
        </div>
      ) : (
        <p>선택된 아이템이 없습니다.</p>
      )}
    </div>
  );
};

export default ItemC;
