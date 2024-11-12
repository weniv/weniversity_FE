import React from "react";

const CourseItem = (props) => {
  const { title, type, image, teacher, price, discount } = props.data;
  return (
    <article>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{teacher}</p>
    </article>
  );
};

export default CourseItem;
