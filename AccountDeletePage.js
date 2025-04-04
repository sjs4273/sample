// src/components/AccountDeletePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccountDeletePage.css";

const AccountDeletePage = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);
  const cancelDelete = () => navigate("/"); // 홈 또는 설정 페이지로
  const confirmDelete = () => navigate("/pwcheck"); // 확인 페이지로

  return (
    <>
      <div className="delete">
        <h1>withus</h1>
        <button className="back" onClick={goBack}>←</button>
        <h1 className="set1">🗑</h1>
        <h2>정말 계정 탈퇴 하시겠습니까?</h2>
        <p>탈퇴 버튼 선택시, 계정은 삭제 되며 복구되지 않습니다</p>

        <button className="cancel" onClick={cancelDelete}>취소</button>
        <div>
          <button className="check3" onClick={confirmDelete}>확인</button>
        </div>
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

export default AccountDeletePage;
