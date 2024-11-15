import React from "react";
import styles from "./CourseSummaryCard.module.scss";
import { priceFormat } from "../../utils/priceFormat";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

export default function CourseSummaryCard({ course }) {
  const { image, title, description, price, discount } = course;
  const navigate = useNavigate();
  const isAutheticated = useAuthStore((state) => state.isAuthenticated);

  const handlePayment = () => {
    if (isAutheticated) {
      navigate("/payment");
    } else {
      navigate("/login", { state: { from: "/payment" }, replace: true });
    }
  };
  return (
    <div className="max-width">
      <section className={styles.card}>
        <h3 className="a11y-hidden">강의 정보 요약</h3>
        <img className={styles["item-thumbnail"]} src={image} alt="" />
        <div className={styles["item-content"]}>
          <h3 className={styles["item-content-title"]}>{title}</h3>
          <p>{description}</p>
          <ul className={styles["item-content-summary"]}>
            <li>일정: 2025.01.01 ~ 2025.05.01</li>
            <li>방식: 온라인 실시간 (ZOOM)</li>
            <li>
              가격:{" "}
              {price === "0" ? (
                <span>무료</span>
              ) : (
                <>
                  {price !== discount ? (
                    <>
                      {priceFormat(discount)}원
                      <span>
                        {(((price - discount) / price) * 100).toFixed(0)}%
                      </span>
                    </>
                  ) : (
                    <>{priceFormat(price)}원</>
                  )}
                </>
              )}
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3>강의 상세 정보</h3>
      </section>
      <div className={styles.floating}>
        <div className={styles.tip}>🎉 내일배움카드가 있다면 무료!</div>
        <button type="button" onClick={handlePayment}>
          수강신청 및 결제하기
        </button>
      </div>
    </div>
  );
}
