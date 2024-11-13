import { useState } from "react";
import CategoryList from "./CategoryList";
import SortingButton from "./SortingButton";
import styles from "./CourseMenu.module.scss";

const SORTING = [
  { id: 0, text: "최신순" },
  { id: 1, text: "인기순" },
];

export default function CourseMenu({ list, state, setState }) {
  const [sortingId, setSortingId] = useState(0);

  return (
    <section className={styles.menu}>
      <h2 className="a11y-hidden">카테고리 및 필터</h2>
      <CategoryList list={list} state={state} setState={setState} />
      <SortingButton list={SORTING} state={sortingId} setState={setSortingId} />
    </section>
  );
}
