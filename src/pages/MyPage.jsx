import LectureList from "../components/lecture/LectureList";
import ProfileLectureCard from "../components/profile/ProfileLectureCard";

const MyPage = () => {
  return (
    <div className="max-width">
      <ProfileLectureCard />
      <LectureList />
    </div>
  );
};

export default MyPage;
