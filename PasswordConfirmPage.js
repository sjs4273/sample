// src/components/PasswordConfirmPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./PasswordConfirmPage.css";

const PasswordConfirmPage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const goGo = () => {
    navigate("/complete");
  }
  return (
    <>
      <div className="delete">
        <h1>withus</h1>
        <button className="back" onClick={goBack}>←</button>

        <h4>현재 비밀번호 확인</h4>
        <input type="password" className="pwcheck" />

        <h4>비밀번호 확인</h4>
        <input type="password" className="pwcheck"/>

        <button className="check5" onClick={goGo}>확인</button>
      </div>

      <div className="down-container">
        <div className="selectbtn">
          <button className="btn2">🏠</button>
          <button className="btn2">🔍</button>
          <button className="btn2">💬</button>
          <button className="btn2">👤</button>
        </div>
      </div>
    </>
  );
};

export default PasswordConfirmPage;
