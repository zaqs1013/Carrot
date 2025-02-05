import React, { useState } from "react";
import "./css/Add.css";

export default function Add({ addNewItem, setMode }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [rawMoney, setRawMoney] = useState(""); // 원본 값
  const [money, setMoney] = useState(""); // 포맷된 값

  const formatMoney = (value) => {
    if (!value) return "";
    const num = parseInt(value.replace(/[^0-9]/g, ""), 10); // 숫자만 필터링
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

  const handleMoneyChange = (e) => {
    const input = e.target.value.replace(/[^0-9]/g, ""); // 숫자 외 문자 제거
    setRawMoney(input);
    setMoney(formatMoney(input));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && location && note && rawMoney) {
      addNewItem({
        name,
        location,
        note,
        category,
        money: formatMoney(rawMoney),
      });
      if (setMode) setMode("default");
    }
  };

  return (
    <div className="add-container">
      <h2 className="add-title">상품 등록</h2>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          placeholder="상품명"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="add-input"
        />
        <input
          type="text"
          placeholder="장소"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="add-input"
        />
        <input
          type="text"
          placeholder="세부사항"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="add-input"
        />

        <div className="category-group">
          <label className="category-label">카테고리 선택:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="자동차">자동차</option>
            <option value="장난감">장난감</option>
            <option value="PC용품">PC용품</option>
          </select>
        </div>

        <div className="price-group">
          <input
            type="text"
            placeholder="₩ 가격"
            value={rawMoney}
            onChange={handleMoneyChange}
            className="price-input"
            inputMode="numeric" // 모바일 키패드에서 숫자 전용 키보드 표시
          />
        </div>

        <div className="add-button-group">
          <button type="submit" className="add-button submit">
            등록
          </button>
          <button
            type="button"
            onClick={() => setMode && setMode("default")}
            className="add-button cancel"
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}
