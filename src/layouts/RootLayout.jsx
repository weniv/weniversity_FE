import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import UtilTestToggle from "../components/test/UtilTestToggle";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <UtilTestToggle />
      <Header />
      <main>
        <Outlet />
      </main>

      <footer>{/* 여기에 푸터 내용을 추가할 수 있습니다 */}</footer>
    </div>
  );
};

export default RootLayout;
