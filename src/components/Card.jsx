import React from "react";

const Card = ({ post }) => {
  return (
    <div className="card">
      <h3>{post.id}</h3>
      <p>{post.title}</p>
    </div>
  );
};

export default Card;
