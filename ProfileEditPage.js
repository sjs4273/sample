// src/components/ProfileEditPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileEditPage.css";

const ProfileEditPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <>
      <div className="profile-change">
        <h1>withus</h1>
        <button className="back" onClick={goBack}>←</button>
        <p className="set">프로필 편집</p>

        <img src="#" alt="프로필 이미지" />
        <p>프로필 사진 편집</p>

        <h4>이름 변경</h4>
        <input type="text" className="namechange" />

        <h4>소개 변경</h4>
        <input type="text" className="myself" />

        <div className="checkbox">
          <button className="check">확인</button>
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

export default ProfileEditPage;
