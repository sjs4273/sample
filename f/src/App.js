import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import First from "./pages/First";
import Second from "./pages/Second";
import Third from "./pages/Third";
import Fourth from "./pages/Fourth";
import Header from "./component/Header";
import BottomNav from "./component/BottomNav";

 import ProfilePage from "./component/ProfilePage";
 import ProfileEditPage from "./component/ProfileEditPage";
 import PasswordChangePage from "./component/PasswordChangePage";
 import AccountDeletePage from "./component/AccountDeletePage";
 import PasswordConfirmPage from "./component/PasswordConfirmPage";
function App() {
  return (
  //   <Router>
  //   <Routes>

  //   </Routes>
  // </Router>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* 기본 경로('/')에서 자동으로 '/first'로 이동 */}
          <Route path="/" element={<Navigate to="/first" />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
          <Route path="/fourth" element={<Fourth />} />
          <Route path="/" element={<ProfilePage />} />
       <Route path="/edit" element={<ProfileEditPage />} />
       <Route path="/pwchange" element={<PasswordChangePage />} />
       <Route path="/delete" element={<AccountDeletePage />} />
       <Route path="/delete/confirm" element={<div>탈퇴 완료 페이지</div>} /> {/* 확인 처리용 */}
       <Route path="/pwcheck" element={<PasswordConfirmPage />} />

        </Routes>

        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
