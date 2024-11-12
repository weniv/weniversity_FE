"use client";
import styles from "./Header.module.scss";

import classNames from "classnames";

import useWindowSize from "../../utils/useWindowSize";
import PCHeader from "./PCHeader";
import MobileHeader from "./MobileHeader";

export default function Header({ type }) {
  const { windowWidth } = useWindowSize();

  return (
    <header className={styles.header}>
      <div className={classNames("max-width", styles.inner, styles[type])}>
        {type ? (
          <PCHeader type={type} />
        ) : (
          <>{windowWidth > 768 ? <PCHeader /> : <MobileHeader />}</>
        )}
      </div>
    </header>
  );
}
