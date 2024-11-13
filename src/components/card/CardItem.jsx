import styles from "./Card.module.scss";
import SVGCalendar from "./svg/SVGCalendar";

import BtnIcon from "../button/BtnIcon";
import SVGShare from "./svg/SVGShare";
import { handleClipBoard } from "@/utils/handleClipBoard";
import { Link } from "react-router-dom";

export default function CardItem({ data, share, titleStart }) {
  const {
    url,
    image,
    type,
    title,
    subtitle,
    description,
    trainingPeriod,
    open,
  } = data;

  return (
    <article className={styles.item}>
      <picture>
        <img
          width="380px"
          height="200px"
          src={image}
          alt=""
          className={styles["item-thumbnail"]}
          loading="lazy"
        />
      </picture>

      <div className={styles["item-content"]}>
        <h3 className={styles["item-content-title"]}>{title}</h3>
        <p className={styles["item-content-desc"]}>{description}</p>

        {trainingPeriod && (
          <p className={styles["item-content-period"]}>
            <SVGCalendar />
            <span className="a11y-hidden">수강기간</span>
            <time>{trainingPeriod}</time>
          </p>
        )}
      </div>
      <Link
        to={url}
        target={share || url.includes("http") ? "_blank" : "_self"}
        title={share || url.includes("http") ? "새창" : ""}
        onClick={(e) => {
          if (open === false && url.includes("http")) {
            alert("모집이 마감되었습니다");
            e.preventDefault();
          }
        }}
      >
        <span className="a11y-hidden">{title}로 이동하기</span>
      </Link>
    </article>
  );
}
