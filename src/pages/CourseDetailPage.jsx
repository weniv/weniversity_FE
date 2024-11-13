import React from "react";
import { useParams } from "react-router-dom";
import courseData from "../../public/data/lecture.json";
import CourseSummaryCard from "../components/course/CourseSummaryCard";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courseData.find((course) => course.id === id);
  return (
    <main>
      <CourseSummaryCard course={course} />
    </main>
  );
};

export default CourseDetailPage;
