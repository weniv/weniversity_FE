import ProfileImg from "./ProfileIcon";
import DailyLog from "../../../public/temp/daily-log.png";
import styles from "./ProfileLectureCard.module.scss";

export default function ProfileLectureCard() {
  return (
    <section className={styles.section}>
      <h2>사용자 정보</h2>
      <div className={styles.info}>
        <ProfileImg width="100" height="100" />
        <ul>
          <li className={styles.strong}>
            백경현 <span>gyeongbaek110@gmail.com</span>
          </li>
          <li>우주 최강 프론트엔드 개발자 가보자고</li>
        </ul>
      </div>
      <div className="contributor">
        <img src={DailyLog} alt="" width="480" />
      </div>
    </section>
  );
}
