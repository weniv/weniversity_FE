import styles from './Card.module.scss';

import CardItem from './CardItem';
import { CATEGORIES } from '@/app/page';

export default function CampList({ activeID }) {
  let camps = require('/public/data/camp.json');

  if (activeID) {
    camps = camps.filter((camp) => camp.type === CATEGORIES[activeID].text);
  }
  return camps.length > 0 ? (
    <ul className={styles.container}>
      {camps.map((camp, index) => (
        <li key={index}>
          <CardItem data={camp} />
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.nodata}>준비중입니다</p>
  );
}
