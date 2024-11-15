// src/components/UtilTest.jsx
import React from "react";
import styles from "./UtilTest.module.scss";
import useAuthStore from "../../store/authStore";
import { useLocation, useNavigate } from "react-router-dom";

export default function UtilTest() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    const testUser = {
      id: 1,
      name: "테스트 사용자",
      email: "test@example.com",
      role: "user",
    };
    const testToken = "test-token-123";

    login(testUser, testToken);
    // 로그인 후 원래 페이지
    navigate(location.state?.from ? location.state.from : "/");
  };

  return (
    <div className={styles.wrap}>
      <section className={styles.login}>
        <button onClick={handleLogin} className={styles.button}>
          로그인
        </button>
        <button onClick={logout} className={styles.button}>
          로그아웃
        </button>
        <p className={styles.status}>
          로그인 상태: <span>{isAuthenticated ? "로그인" : "로그아웃"}</span>
        </p>

        {isAuthenticated && user && (
          <div className={styles.userInfo}>
            <h3>사용자 정보</h3>
            <ul>
              <li>ID: {user.id}</li>
              <li>이름: {user.name}</li>
              <li>이메일: {user.email}</li>
              <li>권한: {user.role}</li>
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
