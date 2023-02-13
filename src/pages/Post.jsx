import React from "react";
import { demo } from "../utils/data";

const Post = () => {
  return (
    <div className="post">
      <h1>{demo.id}</h1>
      <h3>{demo.title}</h3>
    </div>
  );
};

export default Post;
