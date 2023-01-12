import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/Content.css";
import { fetchExperiment } from "../utils/data/fetchExperiment.data";

const Content = () => {
  const { classId, subject, exp } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchExperiment(classId, subject, exp).then((data) => {
      console.log(data);
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
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </article>
  );
};

export default memo(Content);
