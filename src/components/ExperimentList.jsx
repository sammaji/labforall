import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchClasswiseExperiments } from "../utils/data/fetchExperiment.data";
import "../assets/css/DashContent.css";

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
    <div className="exp-list">
      <h2>List of Available Experiments</h2>
      <div className="exp-list-wrapper">
        {list.map((exp) => {
          return (
            <div key={exp.id} className="exp-con">
              <Link to={exp.id} className="exp-con-list">
                <h3>{exp.name}</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperimentList;
