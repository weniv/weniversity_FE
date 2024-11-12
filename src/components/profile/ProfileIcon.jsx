import React from "react";
import styles from "./ProfileIcon.module.scss";
import DefaultProfile from "../../../public/images/defaultProfile.svg";

export default function ProfileIcon(props) {
  const { src, alt, width, height, active } = props;

  // 스타일 정보를 props로 받아서 적용
  return (
    <img
      className={styles.image}
      src={src || DefaultProfile}
      alt={alt || ""}
      width={width || 40}
      height={height || 40}
    />
  );
}
