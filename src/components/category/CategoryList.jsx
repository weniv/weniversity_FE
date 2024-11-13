import styles from './CategoryList.module.scss';
import classNames from 'classnames';

export default function CategoryList({ list, state, setState }) {
  const onClickTab = (e) => {
    const value = e.target.value;

    setState(value * 1);
  };

  return (
    <div className={styles.tab_wrap}>
      {list.map((item, index) => (
        <button
          key={item.id}
          type="button"
          value={index}
          className={classNames(
            styles.tab,
            state === index ? styles.active : '',
          )}
          onClick={onClickTab}>
          {item.text}
        </button>
      ))}
    </div>
  );
}
