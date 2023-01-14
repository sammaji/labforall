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

  const calculateDimensions = () => {
    return [(9 * 600) / 16, 600];
  };

  const [height, width] = calculateDimensions();

  return (
    <article>
      <div>
        <h1>Hello Sam</h1>
        <h2>Today's Experiments</h2>
      </div>

      <div>
        <iframe
          width={width}
          height={height}
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </div>

      <div>
        <h3>Title of Experiment</h3>
        <p>
          {content && content.aim}
        </p>
      </div>
    </article>
  );
};

export default memo(Content);
