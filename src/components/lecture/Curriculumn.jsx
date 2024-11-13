import React from "react";
import styles from "./Curriculumn.module.scss";
export default function Curriculumn() {
  return (
    <ol className={styles.list}>
      <li>
        <button>1. 강의실은 왠지</button>
      </li>
      <li className={styles.active}>
        <button>2. 다크모드를 써야할 것 같은 기분!</button>
      </li>
      <li>
        <button>3. 그게 아니더라도 어두운 요소의</button>
      </li>
      <li>
        <button>4. 비율이 높아야할 것 같은</button>
      </li>
      <li>
        <button>5.그런 느낌적인 느낌?!</button>
      </li>
    </ol>
  );
}
