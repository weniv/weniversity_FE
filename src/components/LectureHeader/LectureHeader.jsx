"use client";
import styles from "./LectureHeader.module.scss";

import classNames from "classnames";

import useWindowSize from "../../utils/useWindowSize";
import LecturePCHeader from "./LecturePCHeader";
import LectureMobileHeader from "./LectureMobileHeader";

export default function LectureHeader({ type }) {
  const { windowWidth } = useWindowSize();

  return (
    <header className={styles.header}>
      <div className={classNames("max-width", styles.inner, styles[type])}>
        {type ? (
          <LecturePCHeader type={type} />
        ) : (
          <>
            {windowWidth > 768 ? <LecturePCHeader /> : <LectureMobileHeader />}
          </>
        )}
      </div>
    </header>
  );
}
