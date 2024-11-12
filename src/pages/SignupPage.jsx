import React from "react";

const SignupPage = () => {
  return (
    <main>
      <h2>회원가입</h2>
      <form action="#">
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" />
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" />
        <label htmlFor="passwordConfirm">비밀번호 확인</label>
        <input type="password" id="passwordConfirm" />
        <strong style={{ color: "red" }}>
          회원가입할 때 개인정보보호 동의 받아야하나요?
        </strong>
        <button type="submit">회원가입</button>
      </form>
    </main>
  );
};

export default SignupPage;
