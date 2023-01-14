import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/Content.css";
import "../assets/css/Content.css";
import { fetchExperiment } from "../utils/data/fetchExperiment.data";

const Content = () => {
  const { classId, subject, exp } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchExperiment(classId, subject, exp).then((data) => {
      setContent(data);
    });
  }, []);

  return (
    <article className="exp-content">
      <div>
        <h1>Hello Sam</h1>
        <h2>Today's Experiments</h2>
      </div>
      <div>
        <h3>{content?.Aim}</h3>
        <p>{content?.MaterialsRequired || "No materials required"}</p>
        <p>{content?.Theory || "No theory available"}</p>
        <p className="new-line">
          {content?.Procedure?.replaceAll("@", "\n").replaceAll(/(\\n)/g, "\n")}
        </p>
        <p className="new-line">
          {content?.Obsevation?.replaceAll("@", "\n").replaceAll(
            /(\\n)/g,
            "\n"
          ) || "Make necessary observations"}
        </p>
        {content?.Calculation?.replaceAll("@", "\n").replaceAll(
          /(\\n)/g,
          "\n"
        ) || "No calculation required"}
        <p className="new-line">
          {content?.Precautions?.replaceAll("@", "\n").replaceAll(
            /(\\n)/g,
            "\n"
          ) || "Follow labratory guidelines"}
        </p>
      </div>
    </article>
  );
};

export default memo(Content);
