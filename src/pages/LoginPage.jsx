import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main>
      <h2>로그인</h2>
      <form action="#">
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" />
        <button type="submit">로그인</button>
      </form>
      <Link to="/signup">회원가입</Link>
      <button type="button">비밀번호 찾기</button>
    </main>
  );
};

export default LoginPage;
