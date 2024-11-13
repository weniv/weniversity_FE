import React from "react";
import LectureHeader from "../components/LectureHeader/LectureHeader";
import { Outlet } from "react-router-dom";

export default function LectureLayout() {
  return (
    <div>
      <LectureHeader />
      <Outlet />
    </div>
  );
}
