import React from "react";
import { Link } from "react-router-dom";
import styles from "./LectureCard.module.scss";
export default function LectureCard({ lecture }) {
  const { id, title, image } = lecture;

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>강의 수강률 80%</p>
      <Link to={`/lecture/${id}`} className={styles.link}>
        강의실 바로가기
      </Link>
    </div>
  );
}
