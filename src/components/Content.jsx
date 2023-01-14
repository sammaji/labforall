import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/Content.css";
import "../assets/css/Content.css";
import { fetchExperiment } from "../utils/data/fetchExperiment.data";
import getModifedClassName from "./getSubject.filter";

const Content = () => {
  const { classId, subject, exp } = useParams();
  const [content, setContent] = useState(null);

  useEffect(() => {
    fetchExperiment(classId, getModifedClassName(classId, subject), exp).then(
      (data) => {
        console.log(data?.Procedure)
        setContent(data);
      }
    );
  }, []);

  return (
    <article className="exp-content">
      <div>
        <h1>Hello Student</h1>
        <h2>Today's Experiments</h2>
      </div>

      <div className="exp-video">
        <iframe src={content?.yt} />
      </div>

      <div>
        <h3>{content?.Aim}</h3>
        <p>
          <span>Materials Required: </span>
          {content?.MaterialsRequired || "No materials required"}
        </p>
        <p className="new-line">
          <span>Theory: </span>
          {content?.Theory?.replaceAll("@", "\n").replaceAll(
            /(\\n)/g,
            "\n"
          ) || "No Theory available"}
        </p>
        <p className="new-line">
          <span>Procedure: </span>
          {content?.Procedure?.replaceAll("@", "\n").replaceAll(
            /(\\n)/g,
            "\n"
          ) || "No Procedure available"}
        </p>
        <p className="new-line">
          <span>Observations: </span>
          {content?.Obsevation?.replaceAll("@", "\n").replaceAll(
            /(\\n)/g,
            "\n"
          ) || "Make necessary observations"}
        </p>
        <p className="new-line">
          <span>Calculations: </span>
          {content?.Calculation?.replaceAll("@", "\n").replaceAll(
            /(\\n)/g,
            "\n"
          ) || "No calculation required"}
        </p>
        <p className="new-line">
          <span>Precautions: </span>
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
