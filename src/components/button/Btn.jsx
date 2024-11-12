import classNames from "classnames";

import styles from "./Btn.module.scss";
import { Link } from "react-router-dom";

export default function xBtn(props) {
  const {
    children,
    to,
    type = "button",
    className,
    solid,
    bordernone,
    target,
  } = props;

  const btnStyle = classNames(
    solid && styles.solid,
    bordernone && styles.borderNone,
    className,
    styles.btn
  );

  if (to) {
    return (
      <Link
        {...props}
        to={to}
        className={btnStyle}
        title={target === "_blank" ? "새창" : ""}
      >
        {children}
      </Link>
    );
  }
  return (
    <button {...props} type={type} className={btnStyle}>
      {children}
    </button>
  );
}
