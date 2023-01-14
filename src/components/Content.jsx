import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/Content.css";
import { fetchExperiment } from "../utils/data/fetchExperiment.data";

const Content = () => {
  const { classId, subject, exp } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchExperiment(classId, subject, exp).then((data) => {
      console.log(data.aim)
      setContent(data);
    });
  }, []);

  const [height, width] = calculateDimensions();

  return (
    <article>
      <div>
        <h1>Hello Sam</h1>
        <h2>Today's Experiments</h2>
      </div>

      <div>
        <h3>{content && content.aim}</h3>
        <p>{content && content.aim}</p>
        <p>{content && content.materials}</p>
        <p>{content && content.observations[0].content}</p>
        <p>{content && content.theory[0].content[0]}</p>
      </div>
    </article>
  );
};

export default memo(Content);
