import styles from "./Logo.module.scss";
import LogoWeniv from "../../svg/LogoWeniv";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className={styles.logo}>
      <h1>
        <LogoWeniv />
        <span className="a11y-hidden">Weniversity</span>
      </h1>
    </Link>
  );
}
