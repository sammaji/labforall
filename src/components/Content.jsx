import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../assets/css/Content.css";
import { fetchExperiment } from "../utils/data/fetchExperiment.data";

const DisplayExperiments = (props) => {
  let observations = null;
  if (typeof props.observations === "string") {
    observations = <p>props.data.observations</p>;
  } else if (Array.isArray(props.observations)) {
    observations = (
      <>
        <ul>
          {props.observations.map((item, index) => {
            return <li key={index}>{item.content}</li>;
          })}
        </ul>
      </>
    );
  }

  return (
    <>
      <h3>{props.aim || ""}</h3>
      <p>{props.materials || ""}</p>
    </>
  );
};

const Content = () => {
  const { classId, subject, exp } = useParams();
  const [content, setContent] = useState(null);

  let exp_data = <p>Loading...</p>

  useEffect(() => {
    fetchExperiment(classId, subject, exp).then((data) => {
      console.log(data.aim);
      setContent(data);

      let observations = undefined;
      if (typeof props.observations === "string") {
        observations = <p>props.observations</p>;
      } else if (Array.isArray(props.observations)) {
        observations = (
          <>
            <ul>
              {props.observations.map((item, index) => {
                return <li key={index}>{item.content}</li>;
              })}
            </ul>
          </>
        );
      }

      exp_data = (
        <>
          <h3>{props.aim || ""}</h3>
          <p>{props.materials || "No materials required"}</p>
        </>
      );
    });
  }, []);

  return (
    <article>
      <div>
        <h1>Hello Sam</h1>
        <h2>Today's Experiments</h2>
      </div>

      {/* <div>{exp_data}</div> */}
      <div>
        <DisplayExperiments data={content}/>
      </div>
    </article>
  );
};

export default memo(Content);
