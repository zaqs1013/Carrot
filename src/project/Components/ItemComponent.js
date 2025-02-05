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
  isMyPostPage,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name,
    location,
    note,
    money,
  });
  const [rawMoney, setRawMoney] = useState(money); // 원본 가격 입력값
  const [isFocused, setIsFocused] = useState(false); // 가격 입력 필드 포커스 상태

  // 가격 포맷 로직
  const formatMoney = (value) => {
    if (!value) return "";
    const num = parseInt(value.replace(/[^0-9]/g, ""), 10); // 숫자만 추출
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
      const numericValue = value.replace(/[^0-9]/g, ""); // 숫자 외 문자 제거
      setRawMoney(numericValue); // 원본 값 업데이트
      setEditedData((prev) => ({
        ...prev,
        [name]: formatMoney(numericValue), // 포맷된 값 업데이트
      }));
    } else {
      setEditedData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    if (onEdit) {
      onEdit({
        ...editedData,
        money: formatMoney(rawMoney), // 저장 시 포맷된 값을 적용
      });
      setIsEditing(false);
    }
  };

  return (
    <div className="item-container" onClick={() => setMode && setMode("ItemC")}>
      <div className="item-left">
        <img src={image} alt="Item" className="item-image" />
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedData.name}
            onChange={handleChange}
          />
        ) : (
          <div className="item-name">{name}</div>
        )}
      </div>
      <div className="item-details">
        <div className="item-row">
          <span>장소:</span>
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={editedData.location}
              onChange={handleChange}
            />
          ) : (
            location
          )}
        </div>
        <div className="item-row">
          <span>세부사항:</span>
          {isEditing ? (
            <input
              type="text"
              name="note"
              value={editedData.note}
              onChange={handleChange}
            />
          ) : (
            note
          )}
        </div>
        <div className="item-row">
          <span>가격:</span>
          {isEditing ? (
            <input
              type="text"
              name="money"
              value={isFocused ? rawMoney : editedData.money} // 포커스 상태에 따라 원본 값과 포맷된 값 전환
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          ) : (
            money
          )}
        </div>
        <div className="item-row">
          <span>판매상태:</span> {purchaseIcon(purchase)}
        </div>

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

        {isMyPostPage && (
          <>
            {!purchase ? null : isEditing ? (
              <button className="save-button" onClick={handleSave}>
                확인
              </button>
            ) : (
              <button
                className="edit-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }}
              >
                수정
              </button>
            )}
            <button
              className="delete-button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemComponent;
