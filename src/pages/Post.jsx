import React from "react";
import { demo } from "../utils/data";
import { useLocation } from "react-router";

const Post = () => {
  const location = useLocation();

  // pathname: '/post/1'
  const path = location.pathname.split("/")[2];

  const post = demo.find((p) => p.id.toString() === path);

  return (
    <div className="post">
      <h1>Index: {post.id}</h1>
      <h3>Title: {post.title}</h3>
    </div>
  );
};

export default Post;
