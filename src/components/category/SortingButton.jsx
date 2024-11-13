import classNames from "classnames";
import styles from "./SortingButton.module.scss";

const SORTING_LIST = [
  { id: 0, text: "인기순" },
  { id: 1, text: "최신순" },
];

export default function SortingButton({ list, state, setState }) {
  const onClickTab = (e) => {
    const value = e.target.value;

    setState(value * 1);
  };

  return (
    <div className={styles.tab_wrap}>
      {SORTING_LIST.map((item, index) => (
        <button
          key={item.id}
          type="button"
          value={index}
          className={classNames(
            styles.tab,
            state === index ? styles.active : ""
          )}
          onClick={onClickTab}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}
