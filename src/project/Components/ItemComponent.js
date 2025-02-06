import React, { useState } from "react";
import "./css/ItemComponent.css";
import { FcCancel, FcCheckmark } from "react-icons/fc";

const purchaseIcon = (purchase) => {
  return purchase ? <FcCancel /> : <FcCheckmark />;
};

const ItemComponent = ({
  setMode,
  My,
  image,
  name,
  location,
  money,
  note,
  purchase,
  purchaseMode,
  onDelete,
  onEdit,
  isMyPostPage, // "내 상품"인지 여부
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ name, location, note, money });
  const [rawMoney, setRawMoney] = useState(money);
  const [isFocused, setIsFocused] = useState(false);

  const formatMoney = (value) => {
    if (!value) return "";
    const num = parseInt(value.replace(/[^0-9]/g, ""), 10);
    if (isNaN(num) || num === 0) return "₩ 0원";

    if (num >= 100000000) {
      const eok = Math.floor(num / 100000000);
      const man = Math.floor((num % 100000000) / 10000);
      return man === 0 ? `₩ ${eok}억` : `₩ ${eok}억 ${man}만원`;
    }
    if (num >= 10000) {
      const man = Math.floor(num / 10000);
      const won = num % 10000;
      return won === 0 ? `₩ ${man}만원` : `₩ ${man}만 ${won.toLocaleString()}원`;
    }
    return `₩ ${num.toLocaleString()}원`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "money") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setRawMoney(numericValue);
      setEditedData((prev) => ({
        ...prev,
        [name]: formatMoney(numericValue),
      }));
    } else {
      setEditedData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    if (onEdit) {
      onEdit({
        ...editedData,
        money: formatMoney(rawMoney),
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="item-container">
      <div className="item-left">
        <img src={image} alt="Item" className="item-image" />
      </div>
      <div className="item-details">
        <div className="item-row">
          <span>이름:</span>
          {isMyPostPage && isEditing ? (
            <input type="text" name="name" value={editedData.name} onChange={handleChange} className="edit-input" />
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="item-row">
          <span>장소:</span>
          {isMyPostPage && isEditing ? (
            <input type="text" name="location" value={editedData.location} onChange={handleChange} className="edit-input" />
          ) : (
            <span>{location}</span>
          )}
        </div>
        <div className="item-row">
          <span>세부사항:</span>
          {isMyPostPage && isEditing ? (
            <input type="text" name="note" value={editedData.note} onChange={handleChange} className="edit-input" />
          ) : (
            <span>{note}</span>
          )}
        </div>
        <div className="item-row">
          <span>가격:</span>
          {isMyPostPage && isEditing ? (
            <input
              type="text"
              name="money"
              value={isFocused ? rawMoney : editedData.money}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="edit-input"
            />
          ) : (
            <span>{money}</span>
          )}
        </div>
        <div className="item-row">
          <span>판매 상태:</span> {purchaseIcon(purchase)}
        </div>

        {/* 구매 버튼: default 화면에서는 유지, MyPost 화면에서는 숨김 */}
        {!isMyPostPage && (
          <div className="item-row purchase-button-container">
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
        )}

        {/* 내 상품(MyPost) 화면에서만 수정/삭제 버튼 활성화 */}
        {isMyPostPage && (
          <div className="edit-button-group">
            {isEditing ? (
              <button className="save-button" onClick={handleSave}>확인</button>
            ) : (
              <button className="edit-button" onClick={() => setIsEditing(true)}>수정</button>
            )}
            <button className="delete-button" onClick={onDelete}>삭제</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemComponent;
