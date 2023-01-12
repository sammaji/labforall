import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchClasswiseExperiments } from "../utils/data/fetchExperiment.data";

const ExperimentList = () => {
  const { classId, subject } = useParams();

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (classId && subject) {
      fetchClasswiseExperiments(classId.toLowerCase(), subject.toLowerCase())
        .then((data) => {
          console.log(data);
          setList(data);
        })
        .catch((err) => setError(err.message));
    }
  }, [classId, subject]);

  return (
    <div>
      {list.map((exp, index) => {
        return (
          <div key={exp.id}>
            <Link to={exp.id}>
              <div>{exp.id}</div>
              <h1>{exp.name}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExperimentList;
