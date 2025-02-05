import React, { useState } from "react";
import "./css/Add.css";

export default function Add({ addNewItem, setMode }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");
  const [money, setMoney] = useState(""); // 가격 상태 추가
  const [isFocused, setIsFocused] = useState(false); // 입력 포커스 상태

  // 가격 변환 로직
  const formatMoney = (value) => {
    if (!value) return "";
    
    let num = parseInt(value.replace(/[^0-9]/g, ""), 10); // 숫자만 추출
    if (isNaN(num) || num === 0) return "₩ 0원";

    if (num >= 100000000) { // 억 단위
      let eok = Math.floor(num / 100000000);
      let man = Math.floor((num % 100000000) / 10000);
      return man === 0 ? `₩ ${eok}억` : `₩ ${eok}억 ${man}만원`;
    }
    if (num >= 10000000) { // 천만원 단위
      let man = Math.floor(num / 10000);
      return `₩ ${man}만원`;
    }
    if (num >= 1000000) { // 백만원 단위
      let man = Math.floor(num / 10000);
      let cheon = Math.floor((num % 10000) / 1000);
      return cheon === 0 ? `₩ ${man}만원` : `₩ ${man}만 ${cheon}천원`;
    }
    if (num >= 100000) { // 십만원 단위
      let man = Math.floor(num / 10000);
      let cheon = Math.floor((num % 10000) / 1000);
      return cheon === 0 ? `₩ ${man}만원` : `₩ ${man}만 ${cheon}천원`;
    }
    if (num >= 10000) { // 만원 단위
      let man = Math.floor(num / 10000);
      let cheon = num % 10000;
      return cheon === 0 ? `₩ ${man}만원` : `₩ ${man}만 ${cheon.toLocaleString()}원`;
    }
    return `₩ ${num.toLocaleString()}원`; // 10,000원 미만
  };

  // 가격 입력 핸들러
  const handleMoneyChange = (e) => {
    setMoney(formatMoney(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && location && note && money) {
      addNewItem({ name, location, note, category, money });
      setMode("default");
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
            value={money}
            onChange={handleMoneyChange}
            className={`price-input ${isFocused ? "focused" : ""}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        <div className="add-button-group">
          <button type="submit" className="add-button submit">등록</button>
          <button type="button" onClick={() => setMode("default")} className="add-button cancel">취소</button>
        </div>
      </form>
    </div>
  );
}
