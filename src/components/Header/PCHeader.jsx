import Logo from "./Logo";
import Nav from "./Nav";
import styles from "./PCHeader.module.scss";
import Btn from "../button/Btn";
import ProfileButton from "./ProfileButton";
import { Link } from "react-router-dom";

export default function PCHeader({ type }) {
  const isLogin = false;
  return (
    <>
      <Logo />
      <Nav className={styles.nav} />
      <Btn className={styles.btn} solid="true" to="/login">
        로그인
      </Btn>
      <Link to="/mypage">
        <ProfileButton />
      </Link>
    </>
  );
}
