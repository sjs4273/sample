// src/components/ProfileFeedPage.js
import React from "react";
import "./ProfileFeedPage.css";

const ProfileFeedPage = () => {
  return (
    <>
      <div className="downprofile" id="downprofile2">
        <img
          src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDA1MTJfMTU3%2FMDAxNzE1NDk2OTEwODcz.CXZg9TpTNiHEu4eKVyuQ9xlJEAbPqWY-BdpfGNTGcYkg.C56gzzpbApK483176zTYAhMUNIKylkG5Ugh-Mw5PVl0g.JPEG%2F%25C1%25A4%25C3%25A5%25BE%25C6%25C0%25CC%25B5%25F0%25BE%25EE_%25C0%25FC%25B1%25B9_%25B0%25F8%25B8%25F0%25C0%25FC_%25C6%25F7%25BD%25BA%25C5%25CD.jpg&type=sc960_832"
          alt="이미지"
          className="img1"
        />
      </div>

      <div className="downprofile3" id="downprofile4">
        <img
          src="https://www.press9.kr/news/photo/201910/31709_craw1.jpg"
          alt="이미지"
          className="img1"
        />
      </div>

      <div className="sideprofile" id="sideprofile2">
        <button className="setting">⚙</button>
        <h2>😐</h2>
        <h3>강아지한마리</h3>
        <div className="fobtn">
          <button className="follower">팔로워</button>
          <button className="following">팔로잉</button>
        </div>
        <h4>공모전 도전중인 사람 입니다</h4>
        <div className="wrbtn">
          <button className="write">글쓰기 +</button>
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

export default ProfileFeedPage;
