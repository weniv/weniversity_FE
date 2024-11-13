import { Link } from "react-router-dom";

export default function LecturePCHeader({ type }) {
  return (
    <>
      <Link to="/mypage">마이페이지로 돌아가기</Link>
      <h2>현재 챕터 | 강의 제목</h2>
    </>
  );
}
