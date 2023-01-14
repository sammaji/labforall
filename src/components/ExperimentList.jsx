import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchClasswiseExperiments } from "../utils/data/fetchExperiment.data";
import "../assets/css/DashContent.css";
import getModifedClassName from "./getSubject.filter";

const ExperimentList = () => {
  const { classId, subject } = useParams();

  const [list, setList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (classId && subject) {
      console.log(getModifedClassName(classId, subject))
      fetchClasswiseExperiments(classId, getModifedClassName(classId, subject))
        .then((data) => {
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
                <h3>{exp?.aim}</h3>
                <p>{exp?.theory}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperimentList;
