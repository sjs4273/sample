// src/components/AccountDeleteComplete.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccountDeleteComplete.css"; // 스타일 분리했다면 이 파일로

const AccountDeleteComplete = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 뒤로가기
  };

  const handleConfirm = () => {
    navigate("/"); // 홈으로 이동 등 원하는 경로로 변경
  };

  return (
    <div className="deletefin">
      <h1>withus</h1>
      <button className="back" onClick={handleBack}>←</button>
      <h2>탈퇴가 완료 되었습니다</h2>
      <button className="check6" onClick={handleConfirm}>확인</button>

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

export default AccountDeleteComplete;
