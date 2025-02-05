import React from "react";
import "./css/ItemComponent.css";
import { FcCancel, FcCheckmark } from "react-icons/fc";

const purchaseIcon = (purchase) => {
  return purchase ? <FcCancel /> : <FcCheckmark />;
};

const ItemComponent = ({ 
  setMode, 
  image, 
  name, 
  location, 
  money, 
  purchase, 
  purchaseMode, 
  onDelete // 삭제 기능 추가
}) => {
  return (
    <div className="item-container" onClick={() => setMode("ItemC")}>
      <div className="item-left">
        <img src={image} alt="Item" className="item-image" />
        <div className="item-name">{name}</div>
      </div>
      <div className="item-details">
        <div className="item-row">
          <span>장소:</span> {location}
        </div>
        <div className="item-row">
          <span>구매:</span>
          <button 
            disabled={!purchase} 
            onClick={(e) => { 
              e.stopPropagation();
              purchaseMode();
              alert("구매 완료"); 
            }}
          >
            {purchase ? "구매 가능" : "판매 완료"}
          </button>
        </div>
        <div className="item-row">
          <span>가격:</span> {money}
        </div>
        <div className="item-row">
          <span>판매상태:</span> {purchaseIcon(purchase)}
        </div>
        {onDelete && (
          <button 
            className="delete-button"
            onClick={(e) => {
              e.stopPropagation(); // 클릭이 부모 div로 전달되지 않게 방지
              onDelete();
            }}
          >
            삭제
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemComponent;
