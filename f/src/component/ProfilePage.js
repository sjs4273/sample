// src/components/ProfilePage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../component/style/ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate();

  const goToProfileEdit = () => {
    navigate("/edit"); // 프로필 편집 페이지로 이동
  };

  const goToPwChange = () => {
    navigate("/pwchange"); // 비밀번호 변경 페이지로 이동
  };

  const goToDelete = () => {
    navigate("/delete"); // 비밀번호 변경 페이지로 이동
  };

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <>
      <div className="profile-container">
        <h1>withus</h1>
        <button className="back" onClick={goBack}>←</button>
        <p className="set">계정 설정</p>

        <div className="button-container">
          <button className="btn" onClick={goToProfileEdit}>프로필 편집</button>
        </div>
        <div>
          <button className="btn" onClick={goToPwChange}>비밀번호 변경</button>
        </div>

        <button className="btn">차단 목록</button>
        <button className="out" onClick={goToDelete}>계정 탈퇴</button>
      </div>

    </>
  );
};

export default ProfilePage;
