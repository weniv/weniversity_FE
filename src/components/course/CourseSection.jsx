import CourseList from "./CourseList";
import styles from "./CourseSection.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SVGTop from "../../svg/SVGTop";
import courseData from "../../../public/data/lecture.json";

const CourseSection = () => {
  return (
    <section className={classNames("max-width", styles.section)}>
      <h2 className={styles.title}>🔥 실시간 인기 강의 </h2>
      <CourseList
        courseData={courseData.sort((a, b) => b.likes - a.likes).slice(0, 4)}
      />
      <Link to="/courses" className={styles.more}>
        강의 더보기
        <SVGTop color="grayLv4" />
      </Link>
    </section>
  );
};

export default CourseSection;
