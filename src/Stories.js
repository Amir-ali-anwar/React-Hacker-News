import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits } = useGlobalContext();
  console.log(hits);
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="stories">
      {hits?.map((story) => {
        console.log(story);
        return <article className="story">sinlge story</article>;
      })}
    </section>
  );
};

export default Stories;
