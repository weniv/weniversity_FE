import { Link } from "react-router-dom";
import styles from "./CourseCard.module.scss";
import { priceFormat } from "../../utils/priceFormat.js";

const CourseCard = ({ course }) => {
  const { id, title, image, description, price, discount } = course;

  return (
    <article className={styles.card}>
      <Link to={`/courses/${id}`}>
        <img className={styles["item-thumbnail"]} src={image} alt="" />
        <div className={styles["item-content"]}>
          <h3 className={styles["item-content-title"]}>{title}</h3>
          <p>{description}</p>
          <div className={styles["item-content-price"]}>
            {price === "0" ? (
              <span>무료</span>
            ) : (
              <>
                {price !== discount ? (
                  <>
                    <span>
                      {(((price - discount) / price) * 100).toFixed(0)}%
                    </span>
                    {priceFormat(discount)}원
                  </>
                ) : (
                  <>{priceFormat(price)}원</>
                )}
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default CourseCard;
