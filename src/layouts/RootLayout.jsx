import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>{/* 여기에 네비게이션 바 등을 추가할 수 있습니다 */}</header>

      <main>
        <Outlet />
      </main>

      <footer>{/* 여기에 푸터 내용을 추가할 수 있습니다 */}</footer>
    </div>
  );
};

export default RootLayout;
