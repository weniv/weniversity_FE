import { useState } from "react";
import CategoryList from "../components/category/CategoryList";
import CourseList from "../components/course/CourseList";
import courseData from "../../public/data/lecture.json";

const CATEGORIES = [
  { id: 0, text: "전체" },
  { id: 4, text: "KDT" },
  { id: 1, text: "프론트엔드" },
  { id: 2, text: "백엔드" },
  { id: 3, text: "데이터분석" },
];

const CoursesPage = () => {
  const [activeID, setActiveID] = useState(0);
  return (
    <main className="max-width">
      <CategoryList list={CATEGORIES} state={activeID} setState={setActiveID} />
      <h2 className="a11y-hidden">{CATEGORIES[activeID].text} 강의 목록</h2>
      <CourseList courseData={courseData} />
    </main>
  );
};

export default CoursesPage;
