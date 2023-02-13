import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className="card">
      <Link className="link" to={`/post/${post.id}`}>
        <h1 className="index">index: {post.id}</h1>
        <h3 className="title">{post.title}</h3>
        <p className="load">Load more...</p>
      </Link>
    </div>
  );
};

export default Card;
