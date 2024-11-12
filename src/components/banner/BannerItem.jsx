import { Link } from "react-router-dom";
import useWindowSize from "../../utils/useWindowSize";
import styles from "./Banner.module.scss";

const Content = (props) => {
  const {
    categoryColor,
    categoryBg,
    thumbnail,
    thumbnailMobile,
    category,
    title,
    description,
    index,
  } = props;
  const { windowWidth } = useWindowSize();

  return (
    <div className="max-width">
      <div className={styles.content}>
        <p
          className={styles.category}
          style={{
            color: categoryColor,
            backgroundColor: categoryBg,
          }}
        >
          {category}
        </p>
        <h3 className={styles.title}>
          {title.map((tit, index) => (
            <span key={index}>{tit}</span>
          ))}
        </h3>

        <p className={styles.description}>
          {description[0]}
          <br />
          <strong>{description[1]}</strong>
        </p>
      </div>

      {thumbnail && (
        <picture>
          <source srcSet={thumbnailMobile} media="(max-width: 640px)" />
          <img
            className={styles.thumbnail}
            src={thumbnail}
            alt=""
            width="640px"
            height="394px"
            rel={index === 0 ? "preload" : null}
            loading={index > 0 ? "lazy" : null}
          />
        </picture>
      )}
    </div>
  );
};
export default function BannerItem({ data, index }) {
  const { bgColor, textColor, link, ...rest } = data;

  const isBlank = link ? link.includes("http") : null;

  return (
    <article
      className={styles.bannerItem}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {link && link ? (
        <Link to={link} target={isBlank ? "_blank" : ""}>
          <Content {...rest} index={index} />
        </Link>
      ) : (
        <Content {...rest} index={index} />
      )}
    </article>
  );
}
