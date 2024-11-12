import React from "react";
import Banner from "../components/banner/Banner";
import CoursesList from "../components/courses/CoursesList";

const MainPage = () => {
  return (
    <main>
      <Banner />
      <section>
        <h2>🔥 실시간 인기 강의 </h2>
        <CoursesList />
        <button type="button">강의 더보기</button>
      </section>
    </main>
  );
};

export default MainPage;
