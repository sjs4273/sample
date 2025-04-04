// src/components/BlockListPage.js
import React from "react";
import "./BlockListPage.css";

const BlockListPage = () => {
  const handleBack = () => {
    window.history.back();
  };

  const blockedUsers = [
    "😑 졸린 고양이",
    "😑 화난 고양이",
    "😑 뛰는 강아지",
    "😑 멍한 고양이",
  ];

  return (
    <div className="block">
      <h1>withus</h1>
      <button className="back" onClick={handleBack}>←</button>
      <p className="set">차단 목록</p>

      {blockedUsers.map((user, index) => (
        <div className="blockbtn" key={index}>
          <h2>{user}</h2>
          <button className="blbtn">차단 해제</button>
        </div>
      ))}

      <div className="down-container">
        <div className="selectbtn">
          <button className="btn2">🏠</button>
          <button className="btn2">🔍</button>
          <button className="btn2">💬</button>
          <button className="btn2">👤</button>
        </div>
      </div>
    </div>
  );
};

export default BlockListPage;
