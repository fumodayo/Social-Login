import React from "react";
import Card from "../components/Card";
import { demo } from "../utils/data";

const Home = () => {
  return (
    <div className="home">
      {demo.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
