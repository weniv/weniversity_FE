import CourseCard from "./CourseCard";
import styles from "./CourseList.module.scss";

const CourseList = (props) => {
  console.log("CourseList", props.courseData);
  const { courseData } = props;

  return (
    <ul className={styles.container}>
      {courseData.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </ul>
  );
};

export default CourseList;
