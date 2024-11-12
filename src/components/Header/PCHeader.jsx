import Logo from "./Logo";
import Nav from "./Nav";
import styles from "./PCHeader.module.scss";
import Btn from "../button/Btn";
import ProfileButton from "./ProfileButton";

export default function PCHeader({ type }) {
  const isLogin = false;
  return (
    <>
      <Logo />
      <Nav className={styles.nav} />
      {isLogin ? (
        <ProfileButton />
      ) : (
        <Btn className={styles.btn} solid="true" to="/login">
          로그인
        </Btn>
      )}
    </>
  );
}
