import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  fetchClasswiseExperiments,
  fetchExperiment,
} from "../utils/data/fetchExperiment.data";

const Data = ({}) => {
  const { classId, subject, exp } = useParams();

  useEffect(() => {
    /* Use when /:class or /:class/:subject */
    // fetchClasswiseExperiments(classId, "biology").then((data) => {
    //   console.log(data);
    // });

    /* Use when /:class/:subject/:exp */
    // fetchExperiment(classId, subject, exp).then((data) => {
    //   console.log(data);
    // });
  }, []);

  return <div>{classId || "Nothing"}</div>;
};

export default Data;
