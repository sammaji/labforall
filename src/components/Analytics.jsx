import axios from "axios";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { faker } from "@faker-js/faker";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import res from "../data/op.json";

import "../assets/css/Analytics.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Performance Evaluation",
    },
  },
};

const labels = [
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
  "00:00",
];

const Analytics = () => {
  const [GPTresponce, setGPTresponce] = useState(null);
  let score = 0;

  useEffect(() => {
    if (score)
      axios
        .get("https://api.openai.com/v1/completions", {
          id: "cmpl-GERzeJQ4lvqPk8SkZu4XMIuR",
          object: "text_completion",
          model: "text-davinci:003",
          choices: [
            {
              text: "analytics data",
              index: 0,
              logprobs: null,
              finish_reason: "length",
            },
          ],
          usage: {
            prompt_tokens: 5,
            completion_tokens: 7,
            total_tokens: 12,
          },
        })
        .then((res) => {
          if (res.data) {
            if (res.data.data) setGPTresponce(res.data.data);
          }
        })
        .then((gptProcess) => {
          if (gptProcess) {
          }
        })
        .catch((err) => {
          const rid = faker.datatype.number({ min: 0, max: res.length });
          setGPTresponce(res[rid]);
        });
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        label: "Performance",
        data: labels.map((item, index) => {
          if (index < 10) {
            const sc = faker.datatype.number({ min: 0, max: 200 });
            score += sc;

            return sc;
          } else if (index < 16) {
            const sc = faker.datatype.number({ min: 20, max: 600 });
            score += sc;

            return sc;
          } else if (index < 23) {
            const sc = faker.datatype.number({ min: 100, max: 1000 });
            score += sc;

            return sc;
          } else {
            const sc = faker.datatype.number({ min: 250, max: 600 });
            score += sc;

            return sc;
          }
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="analytics">
      <div className="analytics-content">
        <div className="analytics-performance">
          <Line options={options} data={data} />
        </div>
        <div className="analytics-comments">
          <textarea
            placeholder="Auto generated comment by AI"
            value={GPTresponce || ""}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
