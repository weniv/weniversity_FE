import React, { useState } from "react";
import ProfileIcon from "../profile/ProfileIcon";
import styles from "./ProfileButton.module.scss";

export default function ProfileButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className={styles.button}>
        <ProfileIcon />
      </button>
      {isOpen && <>찌진</>}
    </>
  );
}
