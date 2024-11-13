import React from "react";
import Curriculumn from "../components/lecture/Curriculumn";

const LecturePage = () => {
  return (
    <div style={{ display: "flex" }}>
      <div
        className="info-text"
        style={{
          color: "red",
          fontSize: "48px",
          fontWeight: "bold",
          position: "absolute",
          background: "white",
        }}
      >
        샘플 영상입니다.
      </div>
      <iframe
        width="1200"
        height="675"
        src="https://www.youtube.com/embed/OvIk6BDkVE4?si=4WVZg3xfm59X0ZJz"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <Curriculumn />
    </div>
  );
};

export default LecturePage;
