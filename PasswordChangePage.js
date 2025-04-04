// src/components/PasswordChangePage.js
import React from "react";
import "./PasswordChangePage.css";
import { useNavigate } from "react-router-dom";

const PasswordChangePage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/"); // 또는 이전 페이지로 이동하려면: navigate(-1);
  };

  return (
    <div className="pw-change">
      <button className="back" onClick={goBack}>←</button>
      <h1>withus</h1>
      <p className="set">비밀번호 변경</p>

      <h4>현재 비밀번호</h4>
      <input type="password" className="namechange" />

      <h4>비밀번호 변경</h4>
      <input type="password" className="myself" />

      <h4 className="pwc">비밀번호 확인</h4>
      <input type="password" className="myself1" />

      <button className="check1">확인</button>
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

export default PasswordChangePage;
