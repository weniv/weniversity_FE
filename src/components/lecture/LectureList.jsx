import React from "react";
import courseData from "../../../public/data/lecture.json";
import LectureCard from "./LectureCard";
import styles from "./LectureList.module.scss";

export default function LectureList() {
  const lectureData = courseData
    .filter((course) => course.type === "프론트엔드")
    .slice(0, 2);
  return (
    <ul className={styles.list}>
      {lectureData.map((lecture, index) => (
        <li key={index}>
          <LectureCard lecture={lecture} />
        </li>
      ))}
    </ul>
  );
}
