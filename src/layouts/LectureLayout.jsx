import React from "react";
import LectureHeader from "../components/lectureHeader/LectureHeader";
import { Outlet } from "react-router-dom";

export default function LectureLayout() {
  return (
    <div>
      <LectureHeader />
      <Outlet />
    </div>
  );
}
