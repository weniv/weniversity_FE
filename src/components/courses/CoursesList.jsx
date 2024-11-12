import React from "react";
import courseData from "../../../public/data/lecture.json";
import CourseItem from "./CourseItem";
import { Link } from "react-router-dom";

const CoursesList = () => {
  return (
    <ul>
      {courseData.map((course, index) => {
        return (
          <li key={index}>
            <Link to={`/courses/${course.id}`}>
              <CourseItem data={course} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CoursesList;
